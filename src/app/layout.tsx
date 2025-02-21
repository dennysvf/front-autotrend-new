'use client'

import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { SidebarProvider } from '@/providers/SidebarProvider'
import { SearchProvider } from '@/providers/SearchProvider'
import { SupportChat } from '@/components/chat/SupportChat'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider>
          <SidebarProvider>
            <SearchProvider>
              {children}
              <SupportChat />
            </SearchProvider>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}