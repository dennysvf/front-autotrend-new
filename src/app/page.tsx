'use client'

import { useEffect, useState } from 'react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { Card } from '@/components/ui/Card'
import { RevenueMap } from '@/components/charts/RevenueMap'
import { TopProducts } from '@/components/dashboard/TopProducts'
import { ActivityFeed } from '@/components/dashboard/ActivityFeed'
import { DashboardCharts } from '@/components/dashboard/DashboardCharts'
import { RobosList } from '@/components/analise/RobosList'
import { PositionsPanel } from '@/components/analise/PositionsPanel'

const stats = [
  {
    title: 'Total de Clientes',
    value: '36,254',
    change: { value: 5.27, trend: 'up' as const }
  },
  {
    title: 'Pedidos',
    value: '5,543',
    change: { value: 1.08, trend: 'down' as const }
  },
  {
    title: 'Receita',
    value: 'R$ 6,254',
    change: { value: 7.00, trend: 'down' as const }
  },
  {
    title: 'Crescimento',
    value: '30.56%',
    change: { value: 4.87, trend: 'up' as const }
  }
]

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento de dados
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background-card p-6 rounded-lg border border-background-secondary">
            <h3 className="text-sm font-medium text-text-secondary">Saldo Total</h3>
            <p className="text-2xl font-bold text-text-primary mt-2">
              R$ 10.791,00
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-states-success text-sm">+2.5%</span>
              <span className="text-text-secondary text-sm">vs. ontem</span>
            </div>
          </div>
          {stats.map((stat) => (
            <Card key={stat.title} {...stat} loading={isLoading} />
          ))}
        </div>
        
        <DashboardCharts />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RobosList />
          </div>
          <div>
            <PositionsPanel />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TopProducts />
          <ActivityFeed />
        </div>

        <RevenueMap />
      </div>
    </DashboardLayout>
  )
} 