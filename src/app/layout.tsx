import { ThemeProvider } from '@/providers/ThemeProvider'
import { SidebarProvider } from '@/providers/SidebarProvider'
import { SearchProvider } from '@/providers/SearchProvider'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { SupportChat } from '@/components/chat/SupportChat'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
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