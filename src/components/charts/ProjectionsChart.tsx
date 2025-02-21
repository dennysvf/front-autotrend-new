'use client'

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useTheme } from '@/providers/ThemeProvider' // Altere esta linha

const data = [
  { month: 'Jan', projeção: 65, atual: 45 },
  { month: 'Fev', projeção: 59, atual: 48 },
  { month: 'Mar', projeção: 80, atual: 65 },
  { month: 'Abr', projeção: 81, atual: 70 },
  { month: 'Mai', projeção: 56, atual: 45 },
  { month: 'Jun', projeção: 85, atual: 71 },
  { month: 'Jul', projeção: 45, atual: 35 },
  { month: 'Ago', projeção: 55, atual: 42 },
  { month: 'Set', projeção: 70, atual: 55 },
  { month: 'Out', projeção: 65, atual: 48 },
  { month: 'Nov', projeção: 75, atual: 60 },
  { month: 'Dez', projeção: 85, atual: 70 },
]

export function ProjectionsChart() {
  const { isDark } = useTheme()
  const textColor = isDark ? '#fff' : '#111827'
  const gridColor = isDark ? '#374151' : '#E5E7EB'

  return (
    <div className="h-[400px] bg-background-card p-6 rounded-lg">
      <h3 className="text-lg font-medium mb-6">Projeções vs Atual</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis dataKey="month" stroke={textColor} />
          <YAxis stroke={textColor} />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#374151' : '#fff',
              borderColor: gridColor,
              color: textColor,
            }}
          />
          <Bar dataKey="projeção" fill="var(--accent-primary)" />
          <Bar dataKey="atual" fill="var(--accent-secondary)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}