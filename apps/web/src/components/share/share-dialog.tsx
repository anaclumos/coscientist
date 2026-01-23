"use client"

import {
  Calendar03Icon,
  Delete02Icon,
  Share01Icon,
  UserAdd01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useMutation, useQuery } from "convex/react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { api } from "@/convex/_generated/api"
import type { Id } from "@/convex/_generated/dataModel"

interface ShareDialogProps {
  blockId: Id<"blocks">
  trigger?: React.ReactElement
}

export function ShareDialog({ blockId, trigger }: ShareDialogProps) {
  const [open, setOpen] = useState(false)
  const [userIdInput, setUserIdInput] = useState("")
  const [role, setRole] = useState<"reader" | "writer">("reader")
  const [embargoDate, setEmbargoDate] = useState("")

  const block = useQuery(api.blocks.getBlock, { blockId })
  const shareBlock = useMutation(api.permissions.shareBlock)
  const unshareBlock = useMutation(api.permissions.unshareBlock)
  const setPublic = useMutation(api.permissions.setPublic)
  const setEmbargo = useMutation(api.permissions.setEmbargo)

  const handleShare = async () => {
    if (!userIdInput.trim()) {
      return
    }

    try {
      await shareBlock({
        blockId,
        userId: userIdInput.trim(),
        role,
      })
      setUserIdInput("")
    } catch (error) {
      console.error("Failed to share block:", error)
    }
  }

  const handleUnshare = async (userId: string) => {
    try {
      await unshareBlock({ blockId, userId })
    } catch (error) {
      console.error("Failed to unshare block:", error)
    }
  }

  const handleTogglePublic = async (checked: boolean) => {
    try {
      await setPublic({ blockId, isPublic: checked })
    } catch (error) {
      console.error("Failed to toggle public status:", error)
    }
  }

  const handleSetEmbargo = async () => {
    if (!embargoDate) {
      return
    }

    try {
      const timestamp = new Date(embargoDate).getTime()
      await setEmbargo({ blockId, embargoUntil: timestamp })
      setEmbargoDate("")
    } catch (error) {
      console.error("Failed to set embargo:", error)
    }
  }

  const handleClearEmbargo = async () => {
    try {
      await setEmbargo({ blockId, embargoUntil: null })
    } catch (error) {
      console.error("Failed to clear embargo:", error)
    }
  }

  if (!block) {
    return null
  }

  const { access } = block
  const allUsers = [...new Set([...access.readers, ...access.writers])]
  const isOwner = (userId: string) => userId === block.createdBy

  const getRoleLabel = (userId: string): string => {
    if (isOwner(userId)) {
      return "Owner"
    }
    if (access.writers.includes(userId)) {
      return "Writer"
    }
    return "Reader"
  }

  return (
    <Dialog onOpenChange={setOpen} open={open}>
      {trigger ? (
        <DialogTrigger render={trigger} />
      ) : (
        <DialogTrigger
          render={
            <Button size="sm" variant="outline">
              <HugeiconsIcon icon={Share01Icon} size={16} strokeWidth={1.5} />
              Share
            </Button>
          }
        />
      )}
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Share Block</DialogTitle>
          <DialogDescription>
            Manage who can access this block and set visibility options
          </DialogDescription>
        </DialogHeader>

        <DialogPanel>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label className="font-medium text-sm">Add User</Label>
              <div className="flex gap-2">
                <Input
                  aria-label="User ID to share with"
                  onChange={(e) => setUserIdInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleShare()
                    }
                  }}
                  placeholder="User ID"
                  value={userIdInput}
                />
                <select
                  aria-label="Access role"
                  className="rounded-lg border border-input bg-background px-3 text-sm focus-visible:ring-1 focus-visible:ring-primary/20 focus-visible:ring-inset"
                  onChange={(e) =>
                    setRole(e.target.value as "reader" | "writer")
                  }
                  value={role}
                >
                  <option value="reader">Reader</option>
                  <option value="writer">Writer</option>
                </select>
                <Button
                  aria-label="Add user"
                  onClick={handleShare}
                  size="icon"
                  variant="outline"
                >
                  <HugeiconsIcon
                    icon={UserAdd01Icon}
                    size={16}
                    strokeWidth={1.5}
                  />
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Label className="font-medium text-sm">Current Access</Label>
              <div className="flex flex-col gap-2">
                {allUsers.length === 0 ? (
                  <p className="text-muted-foreground text-sm">
                    No users have access yet
                  </p>
                ) : (
                  allUsers.map((userId) => (
                    <div
                      className="flex items-center justify-between rounded-lg border border-input bg-muted/32 px-3 py-2"
                      key={userId}
                    >
                      <div className="flex flex-col">
                        <span className="font-mono text-sm">{userId}</span>
                        <span className="text-muted-foreground text-xs">
                          {getRoleLabel(userId)}
                        </span>
                      </div>
                      {!isOwner(userId) && (
                        <Button
                          aria-label={`Remove ${userId} from access`}
                          onClick={() => handleUnshare(userId)}
                          size="icon-sm"
                          variant="ghost"
                        >
                          <HugeiconsIcon
                            icon={Delete02Icon}
                            size={14}
                            strokeWidth={1.5}
                          />
                        </Button>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <Label className="font-medium text-sm">Public Access</Label>
                <span className="text-muted-foreground text-xs">
                  Anyone can view this block
                </span>
              </div>
              <Switch
                checked={access.public}
                onCheckedChange={handleTogglePublic}
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label className="font-medium text-sm">Embargo</Label>
              {access.embargoUntil ? (
                <div className="flex items-center justify-between rounded-lg border border-input bg-muted/32 px-3 py-2">
                  <div className="flex flex-col">
                    <span className="text-sm">
                      {new Date(access.embargoUntil).toLocaleString()}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      Content hidden until this time
                    </span>
                  </div>
                  <Button
                    onClick={handleClearEmbargo}
                    size="sm"
                    variant="ghost"
                  >
                    Clear
                  </Button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Input
                    aria-label="Embargo date and time"
                    onChange={(e) => setEmbargoDate(e.target.value)}
                    type="datetime-local"
                    value={embargoDate}
                  />
                  <Button
                    aria-label="Set embargo date"
                    onClick={handleSetEmbargo}
                    size="icon"
                    variant="outline"
                  >
                    <HugeiconsIcon
                      icon={Calendar03Icon}
                      size={16}
                      strokeWidth={1.5}
                    />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </DialogPanel>

        <DialogFooter variant="bare">
          <Button onClick={() => setOpen(false)} variant="outline">
            Close
          </Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  )
}
