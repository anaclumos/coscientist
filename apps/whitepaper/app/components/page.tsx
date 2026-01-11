'use client'

import {
  ArrowLeft01Icon,
  Notification01Icon,
  Settings01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Pacifico } from 'next/font/google'
import Link from 'next/link'
import * as React from 'react'

import { ThemeToggle } from '@/components/theme-toggle'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FramePanel,
  FrameTitle,
} from '@/components/ui/frame'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/menu'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
})

export default function ComponentsPage() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)

  return (
    <article className='min-h-screen w-full flex items-start justify-center p-4 md:p-8 bg-dotted-pattern bg-fixed leading-8'>
      <Frame className='w-full max-w-3xl my-8'>
        <FramePanel>
          <div className='flex items-start justify-between mb-6'>
            <div>
              <FrameTitle
                className={`${pacifico.className} text-4xl text-foreground -rotate-1.5 inline-block`}
              >
                The User Interface Collection
              </FrameTitle>
              <FrameDescription>
                A comprehensive study of interactive elements
              </FrameDescription>
            </div>
            <ThemeToggle />
          </div>

          <div className='space-y-6'>
            <p>
              In the realm of digital design, the atomic units of interaction
              form the vocabulary of user experience. We begin our exploration
              with the fundamental building blocks that allow users to
              communicate their intent and navigate the digital landscape.
            </p>

            <Separator />

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-6`}
            >
              The Button Gallery
            </h2>

            <p>
              Buttons act as the primary triggers for action. Whether demanding
              attention or offering subtle guidance, their variety ensures that
              every potential user interaction has an appropriate visual weight.
            </p>

            <div className='flex flex-wrap gap-4 my-4 p-4 border rounded-lg bg-background/50'>
              <Button>Default</Button>
              <Button variant='secondary'>Secondary</Button>
              <Button variant='outline'>Outline</Button>
              <Button variant='ghost'>Ghost</Button>
              <Button variant='destructive'>Destructive</Button>
              <Button variant='link'>Link</Button>
            </div>

            <p>
              Size variations allow for hierarchical distinction within a single
              view.
            </p>

            <div className='flex flex-wrap items-center gap-4 my-4 p-4 border rounded-lg bg-background/50'>
              <Button size='sm'>Small</Button>
              <Button size='default'>Default</Button>
              <Button size='lg'>Large</Button>
              <Button size='icon'>
                <HugeiconsIcon icon={Settings01Icon} className='size-4' />
              </Button>
            </div>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-6`}
            >
              Status & Badges
            </h2>

            <p>
              Communication of state is essential. Badges serve as compact
              indicators, utilizing color and semantic meaning to convey status
              without interrupting the flow of information.
            </p>

            <div className='flex flex-wrap gap-4 my-4 p-4 border rounded-lg bg-background/50'>
              <Badge>Default</Badge>
              <Badge variant='secondary'>Secondary</Badge>
              <Badge variant='outline'>Outline</Badge>
              <Badge variant='destructive'>Destructive</Badge>
              <Badge variant='success'>Success</Badge>
              <Badge variant='warning'>Warning</Badge>
              <Badge variant='error'>Error</Badge>
              <Badge variant='info'>Info</Badge>
            </div>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-6`}
            >
              Alerts & Notifications
            </h2>

            <p>
              When immediate attention is required, alerts step forward. They
              break the monotony to deliver critical messages, warnings, or
              confirmations of success.
            </p>

            <div className='grid gap-4 md:grid-cols-2 my-4'>
              <Alert>
                <HugeiconsIcon icon={Notification01Icon} />
                <AlertTitle>Default Alert</AlertTitle>
                <AlertDescription>
                  This is a default alert component showing some information.
                </AlertDescription>
              </Alert>
              <Alert variant='warning'>
                <HugeiconsIcon icon={Notification01Icon} />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  Something might not be right. Check your settings.
                </AlertDescription>
              </Alert>
              <Alert variant='error'>
                <HugeiconsIcon icon={Notification01Icon} />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Critical failure. System is down.
                </AlertDescription>
              </Alert>
              <Alert variant='success'>
                <HugeiconsIcon icon={Notification01Icon} />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Operation completed successfully.
                </AlertDescription>
              </Alert>
            </div>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-6`}
            >
              Container Cards
            </h2>

            <p>
              Cards organize content into digestible units, providing a
              structured way to present heterogeneous information.
            </p>

            <div className='grid gap-6 md:grid-cols-2 my-4'>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    This is the main content of the card. It can contain text,
                    images, or other components.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className='w-full'>Action</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Interactive Card</CardTitle>
                  <CardDescription>With more content</CardDescription>
                </CardHeader>
                <CardContent className='space-y-2'>
                  <div className='rounded-md bg-muted p-2 text-sm'>
                    System status: Online
                  </div>
                  <div className='rounded-md bg-muted p-2 text-sm'>
                    Uptime: 99.9%
                  </div>
                </CardContent>
                <CardFooter className='justify-between'>
                  <Button variant='ghost'>Cancel</Button>
                  <Button>Save</Button>
                </CardFooter>
              </Card>
            </div>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-6`}
            >
              Interactive Elements
            </h2>

            <p>
              Finally, we consider the elements that hide complexity until
              requested: menus, popovers, and tooltips.
            </p>

            <div className='flex flex-wrap gap-8 items-center justify-center my-4 p-8 border rounded-lg bg-background/50'>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant='outline'>Open Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-56' align='start'>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                  >
                    Show Status Bar
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant='destructive'>
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Popover>
                <PopoverTrigger>
                  <Button variant='outline'>Open Popover</Button>
                </PopoverTrigger>
                <PopoverContent className='w-80'>
                  <div className='grid gap-4'>
                    <div className='space-y-2'>
                      <h4 className='font-medium leading-none'>Dimensions</h4>
                      <p className='text-sm text-muted-foreground'>
                        Set the dimensions for the layer.
                      </p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant='outline' size='icon'>
                      <HugeiconsIcon
                        icon={Notification01Icon}
                        className='size-4'
                      />
                      <span className='sr-only'>Notifications</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View notifications</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <p>
              These components form the lexicon of our interface language,
              enabling rich and intuitive user experiences.
            </p>
          </div>
        </FramePanel>
        <FrameFooter>
          <div className='flex justify-between w-full items-center'>
            <Link
              href='/'
              className='flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors'
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} className='size-4' />
              <span>Back to Home</span>
            </Link>
            <p className='text-muted-foreground text-sm'>
              &copy; 2026 Coscientist Design System
            </p>
          </div>
        </FrameFooter>
      </Frame>
    </article>
  )
}
