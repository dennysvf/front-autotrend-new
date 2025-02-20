'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { RobosList } from '@/components/analise/RobosList'
import { QuotesPanel } from '@/components/analise/QuotesPanel'
import { PositionsPanel } from '@/components/analise/PositionsPanel'
import { RoboCard } from '@/components/analise/RoboCard'

export default function AnaliseGeral() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Análise Geral</h1>
          <button className="bg-accent-primary text-white px-4 py-2 rounded-lg hover:bg-accent-primary/90 transition-colors">
            Ir para a listagem de robôs
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <QuotesPanel />
          <RobosList />
          <PositionsPanel />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <RoboCard />
        </div>
      </div>
    </DashboardLayout>
  )
} 