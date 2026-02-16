## Better Auth React Client (Task 7)

**Decision**: Create client-side auth client with organization plugin support.

**Implementation**:
- File: `apps/web/src/lib/auth-client.ts`
- Client: `createAuthClient` from `better-auth/react`
- Plugin: `organizationClient()` from `better-auth/client/plugins`
- baseURL: `process.env.NEXT_PUBLIC_APP_URL` (validated in Task 3)

**Exports**:
- `signIn`, `signUp`, `signOut`, `useSession` - destructured from authClient
- `organization` - exported from authClient.organization

**Rationale**:
- React client handles client-side auth state and hooks
- organizationClient plugin enables org-scoped operations (useActiveOrganization, switchOrganization, etc.)
- Named exports provide convenient import pattern for UI components
- "use client" directive required for React hooks in Next.js App Router

**Status**: ✓ Complete
## Task 6 - Better Auth Server Configuration (2026-02-17)

1. Added `apps/web/src/lib/auth.ts` using `betterAuth()` with `drizzleAdapter(db, { provider: "pg" })` and `db` imported from `@/lib/db` to match Task 5's Drizzle client export.
2. Enabled `emailAndPassword` sign-in and configured `google` + `github` under `socialProviders` with env-backed credentials (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`).
3. Enabled organizations with `organization({ allowUserToCreateOrganization: true })` and intentionally skipped invitation email handlers because invite flow is out of scope.
4. Added `nextCookies()` as the last plugin in the `plugins` array so server actions can persist Better Auth `Set-Cookie` responses.
5. Added Next.js App Router catch-all route at `apps/web/src/app/api/auth/[...all]/route.ts` using `toNextJsHandler(auth)` and exported `{ GET, POST }` directly.
