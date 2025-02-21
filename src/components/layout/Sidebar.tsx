'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSidebar } from '@/providers/SidebarProvider'
import { ChevronDown } from 'lucide-react'
import { 
  LayoutDashboard, 
  Settings, 
  Users, 
  Building2,
  FileText,
  CreditCard,
  Key,
  Home
} from 'lucide-react'

interface SidebarItem {
  label: string
  icon: React.ElementType
  href: string
  subItems?: SidebarSubItem[]
}

interface SidebarSubItem {
  label: string
  href: string
}

const menuItems: SidebarItem[] = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/'
  },
  {
    label: 'Minha Conta',
    icon: Users,
    href: '/account',
    subItems: [
      {
        label: 'Planos',
        href: '/account/plans'
      },
      {
        label: 'Estratégias',
        href: '/account/strategies'
      },
      {
        label: 'Preferências',
        href: '/account/preferences'
      },
      {
        label: 'Corretoras',
        href: '/account/brokers'
      },
      {
        label: 'Financeiro',
        href: '/account/financial'
      },
      {
        label: 'Acesso',
        href: '/account/access'
      }
    ]
  },
  {
    label: 'Análise',
    icon: Building2,
    href: '/analise'
  },
  {
    label: 'Robôs',
    icon: FileText,
    href: '/robos'
  },
  {
    label: 'Operações',
    icon: CreditCard,
    href: '/operacoes'
  },
  {
    label: 'Backtest',
    icon: Key,
    href: '/backtest'
  },
  {
    label: 'Configurações',
    icon: Settings,
    href: '/configuracoes',
    subItems: [
      {
        label: 'Usuários',
        href: '/configuracoes/usuarios'
      }
    ]
  },
  {
    label: 'Sistema',
    icon: Building2,
    href: '/sistema',
    subItems: [
      {
        label: 'Plano',
        href: '/sistema/plano'
      },
      {
        label: 'Itens do Plano',
        href: '/sistema/itens-plano'
      },
      {
        label: 'Estratégias',
        href: '/sistema/estrategias'
      },
      {
        label: 'Parceiros',
        href: '/sistema/parceiros'
      },
      {
        label: 'Gráficos',
        href: '/sistema/graficos'
      },
      {
        label: 'Categorias',
        href: '/sistema/categorias'
      },
      {
        label: 'Mercados',
        href: '/sistema/mercados'
      },
      {
        label: 'Corretoras',
        href: '/sistema/corretoras'
      },
      {
        label: 'Cupom de Desconto',
        href: '/sistema/cupons'
      }
    ]
  }
]

export function Sidebar() {
  const pathname = usePathname()
  const { isOpen } = useSidebar()
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleSubmenu = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    )
  }

  const isSubmenuExpanded = (label: string) => expandedItems.includes(label)

  return (
    <aside className={`
      fixed left-0 top-0 z-40 h-screen pt-16 
      transition-transform duration-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      bg-background border-r border-background-secondary w-64
    `}>
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <div className="space-y-1">
                {item.subItems ? (
                  <button
                    onClick={() => toggleSubmenu(item.label)}
                    className={`
                      flex items-center justify-between w-full p-2 rounded-lg
                      hover:bg-background-secondary/10 transition-colors
                      ${pathname?.startsWith(item.href) ? 'bg-background-secondary/10' : ''}
                    `}
                  >
                    <div className="flex items-center">
                      <item.icon className="w-5 h-5 text-text-secondary" />
                      <span className="ml-3 text-text-primary">{item.label}</span>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 text-text-secondary
                      ${isSubmenuExpanded(item.label) ? 'rotate-180' : ''}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`
                      flex items-center p-2 rounded-lg
                      hover:bg-background-secondary/10 transition-colors
                      ${pathname && pathname === item.href ? 'bg-background-secondary/10' : ''}
                    `}
                  >
                    <item.icon className="w-5 h-5 text-text-secondary" />
                    <span className="ml-3 text-text-primary">{item.label}</span>
                  </Link>
                )}

                {item.subItems && isSubmenuExpanded(item.label) && (
                  <ul className="pl-4 space-y-1">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.href}>
                        <Link
                          href={subItem.href}
                          className={`
                            flex items-center p-2 rounded-lg text-sm
                            hover:bg-background-secondary/10 transition-colors
                            ${pathname === subItem.href ? 'bg-background-secondary/10 text-accent-primary' : 'text-text-secondary'}
                          `}
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}