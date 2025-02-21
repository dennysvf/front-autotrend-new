'use client'

import { StrategyCard } from './StrategyCard'

const mockStrategies = [
  {
    id: '1',
    name: 'CALIFORNIA',
    partner: 'Autotrend',
    graph: 'grafico',
    category: 'Tendência',
    type: '--',
    details: '--',
    isFree: true
  },
  {
    id: '2',
    name: 'CloudTrading Chiusura',
    partner: 'Autotrend',
    graph: 'grafico',
    category: 'Scalper',
    type: '--',
    details: '--',
    isFree: true
  }
]

export function StrategyGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-background-primary">
      {mockStrategies.map((strategy) => (
        <StrategyCard
          key={strategy.id}
          {...strategy}
        />
      ))}
    </div>
  )
}