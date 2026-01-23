import { v } from "convex/values"
import { internalMutation, query } from "./_generated/server"

export const upsertLab = internalMutation({
  args: {
    clerkOrg: v.any(),
  },
  handler: async (ctx, args) => {
    const { id, name, slug, image_url, created_by } = args.clerkOrg
    const now = Date.now()

    const existing = await ctx.db
      .query("labs")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", id))
      .unique()

    const labData = {
      clerkId: id as string,
      name: name as string,
      slug: slug as string,
      imageUrl: image_url as string | undefined,
      createdBy: created_by as string | undefined,
      updatedAt: now,
    }

    if (existing) {
      await ctx.db.patch(existing._id, labData)
      return existing._id
    }

    return await ctx.db.insert("labs", {
      ...labData,
      createdAt: now,
    })
  },
})

export const deleteLab = internalMutation({
  args: { clerkOrgId: v.string() },
  handler: async (ctx, args) => {
    const lab = await ctx.db
      .query("labs")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkOrgId))
      .unique()

    if (lab) {
      const memberships = await ctx.db
        .query("labMemberships")
        .withIndex("by_labId", (q) => q.eq("labId", lab._id))
        .collect()

      for (const membership of memberships) {
        await ctx.db.delete(membership._id)
      }

      await ctx.db.delete(lab._id)
    }
  },
})

export const upsertLabMembership = internalMutation({
  args: {
    clerkMembership: v.any(),
  },
  handler: async (ctx, args) => {
    const { id, organization, public_user_data, role } = args.clerkMembership
    const now = Date.now()

    const lab = await ctx.db
      .query("labs")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", organization.id))
      .unique()

    if (!lab) {
      console.error("Lab not found for membership:", organization.id)
      return
    }

    const existing = await ctx.db
      .query("labMemberships")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", id))
      .unique()

    const membershipData = {
      clerkId: id as string,
      labId: lab._id,
      userId: public_user_data.user_id as string,
      role: role as "org:admin" | "org:member",
      updatedAt: now,
    }

    if (existing) {
      await ctx.db.patch(existing._id, membershipData)
      return existing._id
    }

    return await ctx.db.insert("labMemberships", {
      ...membershipData,
      createdAt: now,
    })
  },
})

export const deleteLabMembership = internalMutation({
  args: { clerkMembershipId: v.string() },
  handler: async (ctx, args) => {
    const membership = await ctx.db
      .query("labMemberships")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkMembershipId))
      .unique()

    if (membership) {
      await ctx.db.delete(membership._id)
    }
  },
})

export const getLabByClerkId = query({
  args: { clerkOrgId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("labs")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkOrgId))
      .unique()
  },
})

export const getLabBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("labs")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique()
  },
})

export const getUserLabs = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      return []
    }

    const userId = identity.subject
    const memberships = await ctx.db
      .query("labMemberships")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .collect()

    const labs = await Promise.all(
      memberships.map(async (m) => {
        const lab = await ctx.db.get(m.labId)
        return lab ? { ...lab, role: m.role } : null
      })
    )

    return labs.filter(Boolean)
  },
})

export const getLabMembers = query({
  args: { labId: v.id("labs") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity()
    if (!identity) {
      return []
    }

    const userMembership = await ctx.db
      .query("labMemberships")
      .withIndex("by_labId_userId", (q) =>
        q.eq("labId", args.labId).eq("userId", identity.subject)
      )
      .unique()

    if (!userMembership) {
      return []
    }

    return await ctx.db
      .query("labMemberships")
      .withIndex("by_labId", (q) => q.eq("labId", args.labId))
      .collect()
  },
})
