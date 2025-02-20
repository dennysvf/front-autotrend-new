'use client'

import { RoboCard } from './RoboCard'

export function RobosList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium text-text-primary">Robôs em Execução</h2>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm font-medium rounded-lg bg-background-secondary hover:bg-background-secondary/70 transition-colors text-text-primary">
            Filtrar
          </button>
          <button className="px-3 py-1.5 text-sm font-medium rounded-lg bg-accent-primary hover:bg-accent-primary/90 transition-colors text-white">
            Novo Robô
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <RoboCard />
      </div>
    </div>
  )
} 