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
  const { isDark } = useTheme()
  const textColor = isDark ? '#fff' : '#111827'
  const gridColor = isDark ? '#374151' : '#E5E7EB'

  return (
    <div className="h-[400px] bg-background-card p-6 rounded-lg">
      <h3 className="text-lg font-medium mb-6">Receita</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
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
          <Line type="monotone" dataKey="value" stroke="var(--accent-primary)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}