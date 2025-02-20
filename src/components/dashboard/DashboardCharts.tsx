'use client'

import dynamic from 'next/dynamic'

const ProjectionsChart = dynamic(() => import('@/components/charts/ProjectionsChart').then(mod => mod.ProjectionsChart), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-background-card p-6 rounded-lg flex items-center justify-center">
      <div className="text-text-secondary">Carregando gráfico...</div>
    </div>
  )
})

const RevenueChart = dynamic(() => import('@/components/charts/RevenueChart').then(mod => mod.RevenueChart), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-background-card p-6 rounded-lg flex items-center justify-center">
      <div className="text-text-secondary">Carregando gráfico...</div>
    </div>
  )
})

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ProjectionsChart />
      <RevenueChart />
    </div>
  )
} 