"use client"

import {
  ArrowDown01Icon,
  Building01Icon,
  CheckmarkCircle01Icon,
  PlusSignIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "@/i18n/navigation"
import { authClient, useSession } from "@/lib/auth-client"
import { cn } from "@/lib/utils"

export function OrgSwitcher() {
  const { data: session } = useSession()
  const { data: organizations } = authClient.useListOrganizations()
  const { data: activeOrg } = authClient.useActiveOrganization()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  if (!session) {
    return null
  }

  const handleSelectOrg = async (orgId: string, slug: string) => {
    await authClient.organization.setActive({ organizationId: orgId })
    router.push(`/${slug}`)
    setOpen(false)
  }

  const handleCreateOrg = () => {
    console.log("Create organization clicked")
    setOpen(false)
  }

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger
        render={
          <Button className="w-[200px] justify-between px-3" variant="outline">
            <span className="flex items-center gap-2 truncate">
              <HugeiconsIcon icon={Building01Icon} size={16} />
              <span className="truncate">
                {activeOrg?.name ?? "Select Organization"}
              </span>
            </span>
            <HugeiconsIcon
              className="shrink-0 text-muted-foreground"
              icon={ArrowDown01Icon}
              size={16}
            />
          </Button>
        }
      />
      <PopoverContent align="start" className="w-[200px] p-0">
        <div className="flex flex-col p-1">
          <div className="px-2 py-1.5 font-medium text-muted-foreground text-xs">
            Organizations
          </div>
          {organizations?.map((org) => (
            <Button
              className={cn(
                "h-8 justify-between px-2 font-normal",
                activeOrg?.id === org.id && "bg-accent"
              )}
              key={org.id}
              onClick={() => handleSelectOrg(org.id, org.slug)}
              variant="ghost"
            >
              <span className="truncate">{org.name}</span>
              {activeOrg?.id === org.id && (
                <HugeiconsIcon icon={CheckmarkCircle01Icon} size={14} />
              )}
            </Button>
          ))}
          {(!organizations || organizations.length === 0) && (
            <div className="px-2 py-2 text-center text-muted-foreground text-sm">
              No organizations found
            </div>
          )}
        </div>
        <Separator />
        <div className="p-1">
          <Button
            className="h-8 w-full justify-start px-2 font-normal"
            onClick={handleCreateOrg}
            variant="ghost"
          >
            <HugeiconsIcon className="mr-2" icon={PlusSignIcon} size={14} />
            Create Organization
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
