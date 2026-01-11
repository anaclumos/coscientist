'use client'

import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import type * as React from 'react'

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <main className='flex-1 min-w-0 flex flex-col transition-all duration-300 ease-in-out'>
        <div className='md:hidden p-4 sticky top-0 z-20 flex justify-start w-full pointer-events-none'>
          <div className='pointer-events-auto'>
            <SidebarTrigger className='bg-background/50 backdrop-blur-sm border border-border shadow-sm rounded-full p-2 h-10 w-10 hover:bg-accent hover:text-accent-foreground' />
          </div>
        </div>
        <div className='flex-1'>{children}</div>
      </main>
    </SidebarProvider>
  )
}
