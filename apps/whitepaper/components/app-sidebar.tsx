'use client'

import { ThemeToggle } from '@/components/theme-toggle'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarNav,
  SidebarNavItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import {
  Cancel01Icon,
  ChartBarLineIcon,
  Cursor02Icon,
  Home01Icon,
  Layers01Icon,
  Menu01Icon,
  Settings02Icon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { AnimatePresence, motion } from 'motion/react'
import { Pacifico } from 'next/font/google'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400'],
})

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home01Icon,
  },
  {
    title: 'Components',
    url: '/components',
    icon: Layers01Icon,
  },
  {
    title: 'Charts',
    url: '/charts',
    icon: ChartBarLineIcon,
  },
  {
    title: 'Buttons',
    url: '/buttons',
    icon: Cursor02Icon,
  },
  {
    title: 'Settings',
    url: '/settings',
    icon: Settings02Icon,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const { open, toggle, isMobile } = useSidebar()

  return (
    <>
      <AnimatePresence>
        {!open && !isMobile && (
          <motion.button
            type='button'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={toggle}
            className='fixed left-6 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background shadow-lg hover:bg-accent hover:text-accent-foreground'
          >
            <HugeiconsIcon icon={Menu01Icon} className='h-5 w-5' />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div
        className={cn(
          'md:fixed md:top-1/2 md:left-6 md:z-50 md:-translate-y-1/2',
          isMobile ? 'contents' : '',
        )}
        initial={false}
        animate={
          !isMobile ? { x: open ? 0 : -400, opacity: open ? 1 : 0 } : undefined
        }
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{ pointerEvents: !isMobile && !open ? 'none' : 'auto' }}
      >
        <Sidebar
          collapsible='none'
          className='border-r border-sidebar-border bg-background h-svh sticky top-0 md:h-auto md:max-h-[80vh] md:w-auto md:min-w-[16rem] md:rounded-xl md:border md:shadow-2xl transition-all duration-300'
          mobileClassName='bg-background'
        >
          <SidebarHeader className='h-16 flex-row items-center justify-between px-6'>
            <Link href='/' className='flex items-center gap-2'>
              <span className={cn(pacifico.className, 'text-2xl font-bold')}>
                Coscientist
              </span>
            </Link>
            {!isMobile && (
              <button
                type='button'
                onClick={toggle}
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <HugeiconsIcon icon={Cancel01Icon} className='h-4 w-4' />
              </button>
            )}
          </SidebarHeader>
          <SidebarContent className='px-4'>
            <SidebarNav>
              {items.map((item) => (
                <SidebarNavItem
                  key={item.title}
                  href={item.url}
                  isActive={pathname === item.url}
                  className={cn(
                    'gap-3 text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50 transition-all duration-200',
                    pathname === item.url &&
                      'font-medium text-foreground bg-sidebar-accent',
                  )}
                >
                  <HugeiconsIcon icon={item.icon} className='h-4 w-4' />
                  <span>{item.title}</span>
                </SidebarNavItem>
              ))}
            </SidebarNav>
          </SidebarContent>
          <SidebarFooter className='p-4 border-t border-sidebar-border/50'>
            <div className='flex items-center justify-between'>
              <span className='text-xs text-muted-foreground'>Theme</span>
              <ThemeToggle />
            </div>
          </SidebarFooter>
        </Sidebar>
      </motion.div>
    </>
  )
}
