'use client'

import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useTheme } from '@/providers/ThemeProvider'

const data = [
  { day: 'Seg', atual: 58254, anterior: 69524 },
  { day: 'Ter', atual: 63251, anterior: 65420 },
  { day: 'Qua', atual: 75412, anterior: 71054 },
  { day: 'Qui', atual: 68524, anterior: 72145 },
  { day: 'Sex', atual: 72145, anterior: 68745 },
  { day: 'Sab', atual: 65874, anterior: 65987 },
  { day: 'Dom', atual: 61254, anterior: 64521 },
]

export function RevenueChart() {
  const { theme } = useTheme()
  const textColor = theme === 'dark' ? '#fff' : '#111827'
  const gridColor = theme === 'dark' ? '#374151' : '#E5E7EB'

  return (
    <div className="h-[400px] bg-background-card p-6 rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Receita Semanal</h3>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-primary" />
            <span className="text-sm">Atual</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-secondary" />
            <span className="text-sm">Anterior</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="day" stroke={textColor} />
          <YAxis 
            stroke={textColor}
            tickFormatter={(value) => `R$ ${(value / 1000).toFixed(1)}k`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: theme === 'dark' ? '#374151' : '#fff',
              borderColor: gridColor,
              color: textColor,
            }}
            formatter={(value: number) => [`R$ ${value.toLocaleString()}`, '']}
          />
          <Line 
            type="monotone" 
            dataKey="atual" 
            stroke="var(--accent-primary)" 
            strokeWidth={2}
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="anterior" 
            stroke="var(--accent-secondary)" 
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
} 