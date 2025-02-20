'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { RobosList } from '@/components/robos/RobosList'

type TabType = 'executando' | 'parados' | 'arquivados'

export default function RobosPage() {
  const [activeTab, setActiveTab] = useState<TabType>('executando')

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Robôs</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-text-secondary">
              Em execução: 3 | Simulado: 3 | Real: 0 | Disponível: 20
            </span>
          </div>
        </div>

        <div className="bg-background-card rounded-xl shadow-lg overflow-hidden">
          <div className="border-b border-background-secondary">
            <div className="flex">
              {(['executando', 'parados', 'arquivados'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'text-accent-primary border-b-2 border-accent-primary'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            <RobosList status={activeTab} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 