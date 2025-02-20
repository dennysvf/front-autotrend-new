'use client'

import React from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { useSidebar } from '@/providers/SidebarProvider'
import { SearchBar } from './SearchBar'
import { UserMenu } from './UserMenu'

export function Header() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="h-16 px-6 bg-background-card border-b border-background-secondary flex items-center justify-between fixed top-0 right-0 left-0 z-50">
      {/* Logo, Toggle e Busca */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-background-secondary/50 transition-colors text-text-secondary hover:text-accent-primary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-xl font-bold bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
            HYPER
          </span>
        </div>
        
        <SearchBar />
      </div>
      
      {/* Ações do Usuário */}
      <div className="flex items-center gap-4">
        {/* Notificações */}
        <button className="p-2 rounded-lg hover:bg-background-secondary/50 transition-colors relative text-text-secondary hover:text-accent-primary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-states-error rounded-full"></span>
        </button>

        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  )
} 