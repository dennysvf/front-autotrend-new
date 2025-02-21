'use client'

import React from 'react'
import { useTheme } from '@/providers/ThemeProvider'

const locations = [
  { city: 'Nova York', value: '72k', color: 'var(--accent-primary)' },
  { city: 'San Francisco', value: '39k', color: 'var(--accent-secondary)' },
  { city: 'Sydney', value: '25k', color: 'var(--accent-primary)' },
  { city: 'Singapura', value: '61k', color: 'var(--accent-secondary)' },
]

export function RevenueMap() {
  const { isDark } = useTheme()
  
  return (
    <div className="bg-background-card rounded-lg p-6">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-lg font-medium">Receita por Localização</h3>
        <div className="space-y-2">
          {locations.map((location) => (
            <div key={location.city} className="flex items-center justify-between gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: location.color }}
                />
                <span className="text-text-secondary">{location.city}</span>
              </div>
              <span className="font-medium">{location.value}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="h-[300px] flex items-center justify-center">
        <div className="text-text-secondary text-sm">
          Mapa interativo indisponível no momento
        </div>
      </div>
    </div>
  )
}