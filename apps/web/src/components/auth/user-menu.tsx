"use client"

import { Logout01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "@/i18n/navigation"
import { signOut, useSession } from "@/lib/auth-client"

export function UserMenu() {
  const { data: session } = useSession()
  const router = useRouter()

  if (!session) {
    return null
  }

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/")
        },
      },
    })
  }

  const userInitials = session.user.name
    ? session.user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : (session.user.email?.slice(0, 2).toUpperCase() ?? "??")

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button className="relative h-8 w-8 rounded-full" variant="ghost" />
        }
      >
        <Avatar className="h-8 w-8">
          <AvatarImage
            alt={session.user.name ?? "User"}
            src={session.user.image ?? undefined}
          />
          <AvatarFallback>{userInitials}</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-56">
        <div className="flex flex-col space-y-1 p-2">
          <p className="font-medium text-sm leading-none">
            {session.user.name}
          </p>
          <p className="text-muted-foreground text-xs leading-none">
            {session.user.email}
          </p>
        </div>
        <Separator />
        <div className="p-2">
          <Button
            className="w-full justify-start text-red-600 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/20"
            onClick={handleSignOut}
            variant="ghost"
          >
            <HugeiconsIcon className="mr-2" icon={Logout01Icon} size={16} />
            Sign out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
