'use client'

import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/Input'

interface Strategy {
  id: string
  name: string
  partner: string
  graphic: string
  category: string
  type: string
  details: string
  isFree: boolean
}

export default function StrategiesPage() {
  const strategies: Strategy[] = [
    {
      id: '1',
      name: 'CALIFORNIA',
      partner: 'Autotrend',
      graphic: 'gráfico',
      category: 'Tendência',
      type: '--',
      details: '--',
      isFree: true
    },
    {
      id: '2',
      name: 'CloudTrading Chiusura',
      partner: 'Autotrend',
      graphic: 'gráfico',
      category: 'Scalper',
      type: '--',
      details: '--',
      isFree: true
    },
    {
      id: '3',
      name: 'CloudTrading Apertura',
      partner: 'Autotrend',
      graphic: 'gráfico',
      category: 'Scalper',
      type: '--',
      details: '--',
      isFree: true
    },
    {
      id: '4',
      name: 'Copy Autotrend',
      partner: 'Autotrend',
      graphic: 'gráfico',
      category: 'Scalper',
      type: 'Gradiente Linear',
      details: '--',
      isFree: true
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1">
          <Input
            placeholder="Pesquisar estratégias..."
            className="bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {strategies.map((strategy) => (
          <div key={strategy.id} className="bg-white p-6 rounded-lg border border-gray-100 flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Image
                  src="/robot-icon.png"
                  alt="Robot Icon"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium text-lg">{strategy.name}</h3>
                <span className="text-primary text-sm">
                  {strategy.isFree ? 'Grátis' : ''}
                </span>
              </div>
              
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-24">Parceiro:</span>
                  <span>{strategy.partner}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24">Gráfico:</span>
                  <span>{strategy.graphic}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24">Categoria:</span>
                  <span>{strategy.category}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24">Tipo:</span>
                  <span>{strategy.type}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24">Detalhes:</span>
                  <span>{strategy.details}</span>
                </div>
              </div>

              {strategy.isFree && (
                <div className="mt-4">
                  <span className="text-xs text-gray-500">
                    Estratégia do Plano Atual
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 