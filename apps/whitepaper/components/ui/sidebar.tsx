'use client'

import { cn } from '@/lib/utils'
import { Dialog } from '@base-ui/react/dialog'
import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { Cancel01Icon, Menu01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { type VariantProps, cva } from 'class-variance-authority'
import { motion } from 'motion/react'
import * as React from 'react'

const SIDEBAR_WIDTH = '16rem'
const SIDEBAR_WIDTH_ICON = '3rem'

type SidebarContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
  toggle: () => void
  isMobile: boolean
}

const SidebarContext = React.createContext<SidebarContextValue | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }
>(
  (
    {
      defaultOpen = false,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [isMobile, setIsMobile] = React.useState(false)
    const [openMobile, setOpenMobile] = React.useState(false)

    const [_open, _setOpen] = React.useState(defaultOpen)
    const open = openProp ?? _open

    const setOpen = React.useCallback(
      (value: boolean | ((prev: boolean) => boolean)) => {
        const nextValue = typeof value === 'function' ? value(open) : value
        if (setOpenProp) {
          setOpenProp(nextValue)
        } else {
          _setOpen(nextValue)
        }
        setOpenMobile(nextValue)
      },
      [setOpenProp, open],
    )

    const toggle = React.useCallback(() => {
      setOpen((prev) => !prev)
    }, [setOpen])

    React.useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }
      checkMobile()
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const contextValue = React.useMemo<SidebarContextValue>(
      () => ({
        open,
        setOpen,
        toggle,
        isMobile,
      }),
      [open, setOpen, toggle, isMobile],
    )

    return (
      <SidebarContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(
            'group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar',
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    )
  },
)
SidebarProvider.displayName = 'SidebarProvider'

const Sidebar = React.forwardRef<
  HTMLElement,
  React.ComponentProps<'aside'> & {
    side?: 'left' | 'right'
    variant?: 'sidebar' | 'floating' | 'inset'
    collapsible?: 'offcanvas' | 'icon' | 'none'
    mobileClassName?: string
  }
>(
  (
    {
      side = 'left',
      variant = 'sidebar',
      collapsible = 'offcanvas',
      className,
      mobileClassName,
      children,
      ...props
    },
    ref,
  ) => {
    const { isMobile, open, setOpen } = useSidebar()

    return (
      <>
        <aside
          ref={ref}
          className={cn(
            'hidden w-64 border-r border-sidebar-border bg-sidebar text-sidebar-foreground md:block',
            className,
          )}
          data-slot='sidebar'
          data-state={
            collapsible === 'none'
              ? 'expanded'
              : open
                ? 'expanded'
                : 'collapsed'
          }
          data-collapsible={
            collapsible === 'none' ? 'offcanvas' : open ? 'offcanvas' : 'icon'
          }
          data-variant={variant}
          data-side={side}
          {...props}
        >
          <div className='flex h-full w-full flex-col'>{children}</div>
        </aside>

        <Dialog.Root open={open && isMobile} onOpenChange={setOpen}>
          <Dialog.Portal>
            <Dialog.Backdrop
              className='fixed inset-0 z-50 bg-black/80 transition-opacity duration-300 data-[state=open]:opacity-100 data-[state=closed]:opacity-0'
              render={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              }
            />
            <Dialog.Popup
              className={cn(
                'fixed inset-y-0 left-0 z-50 h-full w-3/4 max-w-sm border-r border-sidebar-border bg-sidebar p-0 text-sidebar-foreground shadow-xl focus:outline-none sm:max-w-xs',
                mobileClassName,
              )}
              render={
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                />
              }
            >
              <div className='flex h-full flex-col'>
                <div className='flex items-center justify-between px-4 py-4 md:hidden'>
                  <span className='font-semibold'>Navigation</span>
                  <Dialog.Close className='rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary'>
                    <HugeiconsIcon icon={Cancel01Icon} className='h-4 w-4' />
                    <span className='sr-only'>Close</span>
                  </Dialog.Close>
                </div>
                {children}
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </>
    )
  },
)
Sidebar.displayName = 'Sidebar'

const SidebarTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'>
>(({ className, onClick, ...props }, ref) => {
  const { toggle } = useSidebar()

  return (
    <button
      ref={ref}
      data-sidebar='trigger'
      data-slot='sidebar-trigger'
      className={cn(
        'flex h-7 w-7 items-center justify-center rounded-md text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className,
      )}
      onClick={(event) => {
        onClick?.(event)
        toggle()
      }}
      {...props}
    >
      <HugeiconsIcon icon={Menu01Icon} className='h-4 w-4' />
      <span className='sr-only'>Toggle Sidebar</span>
    </button>
  )
})
SidebarTrigger.displayName = 'SidebarTrigger'

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar='content'
      data-slot='sidebar-content'
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        className,
      )}
      {...props}
    />
  )
})
SidebarContent.displayName = 'SidebarContent'

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar='header'
      data-slot='sidebar-header'
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  )
})
SidebarHeader.displayName = 'SidebarHeader'

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar='footer'
      data-slot='sidebar-footer'
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = 'SidebarFooter'

const SidebarNav = React.forwardRef<HTMLElement, React.ComponentProps<'nav'>>(
  ({ className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        data-sidebar='nav'
        data-slot='sidebar-nav'
        className={cn('flex flex-col gap-1 px-2', className)}
        {...props}
      />
    )
  },
)
SidebarNav.displayName = 'SidebarNav'

const sidebarNavItemVariants = cva(
  'group/sidebar-item relative flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium outline-none ring-sidebar-ring transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[active=true]:font-semibold',
  {
    variants: {
      variant: {
        default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        outline:
          'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
      },
      size: {
        default: 'h-8 text-sm',
        sm: 'h-7 text-xs',
        lg: 'h-12 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface SidebarNavItemProps extends useRender.ComponentProps<'a'> {
  variant?: VariantProps<typeof sidebarNavItemVariants>['variant']
  size?: VariantProps<typeof sidebarNavItemVariants>['size']
  isActive?: boolean
}

function SidebarNavItem({
  className,
  variant,
  size,
  isActive,
  render,
  ...props
}: SidebarNavItemProps) {
  const defaultProps = {
    className: cn(sidebarNavItemVariants({ variant, size, className })),
    'data-sidebar': 'nav-item',
    'data-slot': 'sidebar-nav-item',
    'data-active': isActive,
  }

  return useRender({
    defaultTagName: 'a',
    props: mergeProps<'a'>(defaultProps, props),
    render,
  })
}

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar='group'
      data-slot='sidebar-group'
      className={cn('flex w-full min-w-0 flex-col p-2', className)}
      {...props}
    />
  )
})
SidebarGroup.displayName = 'SidebarGroup'

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar='group-label'
      data-slot='sidebar-group-label'
      className={cn(
        'flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        className,
      )}
      {...props}
    />
  )
})
SidebarGroupLabel.displayName = 'SidebarGroupLabel'

export {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarNav,
  SidebarNavItem,
  SidebarGroup,
  SidebarGroupLabel,
  useSidebar,
}
