'use client'

import {
  ArrowLeft01Icon,
  LaptopIcon,
  Moon02Icon,
  Sun01Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useTheme } from 'next-themes'
import { Pacifico } from 'next/font/google'
import Link from 'next/link'
import * as React from 'react'

import { ThemeToggle } from '@/components/theme-toggle'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
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
import { Separator } from '@/components/ui/separator'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
})

export default function SettingsPage() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <article className='min-h-screen w-full flex items-start justify-center p-4 md:p-8 bg-dotted-pattern bg-fixed leading-8'>
      <Frame className='w-full max-w-3xl my-8'>
        <FramePanel>
          <div className='flex items-start justify-between mb-6'>
            <div>
              <FrameTitle
                className={`${pacifico.className} text-4xl text-foreground -rotate-1.5 inline-block`}
              >
                Configuration & Preferences
              </FrameTitle>
              <FrameDescription>Personalize your experience</FrameDescription>
            </div>
            <ThemeToggle />
          </div>

          <div className='space-y-6'>
            <p>
              Software should adapt to the user, not the other way around. By
              providing granular control over appearance and behavior, we ensure
              that the interface feels like a natural extension of your
              workflow.
            </p>

            <Separator />

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-6`}
            >
              Visual Environment
            </h2>

            <p>
              The choice between light and dark modes is more than aesthetic; it
              is about accessibility and comfort in varying lighting conditions.
            </p>

            <Card className='my-4'>
              <CardHeader>
                <CardTitle>Appearance</CardTitle>
                <CardDescription>
                  Customize the look and feel of the application.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <div className='text-sm font-medium leading-none'>Theme</div>
                  <div className='flex flex-wrap gap-4'>
                    <Button
                      variant={theme === 'light' ? 'default' : 'outline'}
                      onClick={() => setTheme('light')}
                      className='gap-2'
                    >
                      <HugeiconsIcon icon={Sun01Icon} className='size-4' />
                      Light
                    </Button>
                    <Button
                      variant={theme === 'dark' ? 'default' : 'outline'}
                      onClick={() => setTheme('dark')}
                      className='gap-2'
                    >
                      <HugeiconsIcon icon={Moon02Icon} className='size-4' />
                      Dark
                    </Button>
                    <Button
                      variant={theme === 'system' ? 'default' : 'outline'}
                      onClick={() => setTheme('system')}
                      className='gap-2'
                    >
                      <HugeiconsIcon icon={LaptopIcon} className='size-4' />
                      System
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2
              className={`${pacifico.className} text-3xl text-foreground inline-block pt-6`}
            >
              User Profile
            </h2>

            <p>
              Managing your identity and subscription status should be
              transparent and straightforward.
            </p>

            <Card className='my-4'>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>Manage your account settings.</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='flex items-center justify-between rounded-lg border p-4'>
                  <div className='space-y-0.5'>
                    <div className='text-sm font-medium'>Subscription Plan</div>
                    <div className='text-sm text-muted-foreground'>
                      You are currently on the{' '}
                      <span className='font-semibold text-foreground'>
                        Free
                      </span>{' '}
                      plan.
                    </div>
                  </div>
                  <Badge variant='secondary'>Free</Badge>
                </div>

                <div className='flex items-center justify-between rounded-lg border p-4'>
                  <div className='space-y-0.5'>
                    <div className='text-sm font-medium'>
                      Email Notifications
                    </div>
                    <div className='text-sm text-muted-foreground'>
                      Receive daily digests of your activity.
                    </div>
                  </div>
                  <Button variant='outline' size='sm'>
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>
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
