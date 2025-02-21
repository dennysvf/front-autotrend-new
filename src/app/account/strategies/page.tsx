'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { StrategyGrid } from '@/components/strategies/StrategyGrid'
import { SearchBar } from '@/components/layout/SearchBar'

export default function StrategiesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-text-primary">Estratégias</h1>
          <SearchBar />
        </div>

        <StrategyGrid />
      </div>
    </DashboardLayout>
  )
}