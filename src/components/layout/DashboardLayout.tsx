'use client'

import React, { Suspense } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { useSidebar } from '@/providers/SidebarProvider'
import { PageTransition } from './PageTransition'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { isOpen } = useSidebar()
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Sidebar />
      <main className={`pt-16 transition-all duration-300 ${
        isOpen ? 'pl-64' : 'pl-0'
      }`}>
        <div className="p-6">
          <Breadcrumbs />
          <Suspense fallback={<LoadingSpinner />}>
            <PageTransition>
              {children}
            </PageTransition>
          </Suspense>
        </div>
      </main>
    </div>
  )
}