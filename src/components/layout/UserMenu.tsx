'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 pl-4 border-l border-background-secondary hover:bg-background-secondary/10 rounded-lg p-2 transition-colors text-text-primary"
      >
        <div className="text-right">
          <p className="text-sm font-medium text-text-primary">Dominik K.</p>
          <p className="text-xs text-text-secondary">Administrador</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-medium">
          DK
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-background rounded-lg shadow-lg border border-background-secondary overflow-hidden z-50">
          <div className="p-3 border-b border-background-secondary">
            <p className="text-sm font-medium">Dominik Kuhn</p>
            <p className="text-xs text-text-secondary">dominik@example.com</p>
          </div>
          
          <div className="p-2">
            <Link
              href="/conta/perfil"
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-background-secondary/50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Meu Perfil
            </Link>
            
            <button
              className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-background-secondary/50 transition-colors text-red-500"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sair
            </button>
          </div>
        </div>
      )}
    </div>
  )
}