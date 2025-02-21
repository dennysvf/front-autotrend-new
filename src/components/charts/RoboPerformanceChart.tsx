'use client'

import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'
import { useTheme } from '@/providers/ThemeProvider'

interface RoboPerformanceChartProps {
  mainTab: 'diario' | 'historico'
}

const performanceData = [
  { data: '19/02 09:11', valor: 130340.00 },
  { data: '19/02 09:13', valor: 130240.00 },
  { data: '19/02 09:15', valor: 130240.00 },
  { data: '19/02 09:16', valor: 130190.00 },
  { data: '19/02 09:19', valor: 129440.00 },
  { data: '19/02 09:21', valor: 129390.00 },
  { data: '19/02 09:22', valor: 129340.00 },
  { data: '19/02 09:44', valor: 129290.00 },
  { data: '19/02 09:45', valor: 129240.00 },
  { data: '19/02 09:47', valor: 129190.00 },
  { data: '19/02 09:50', valor: 129140.00 },
  { data: '19/02 09:53', valor: 129090.00 },
]

export function RoboPerformanceChart({ mainTab }: RoboPerformanceChartProps) {
  const { isDark } = useTheme()
  
  return (
    <div className="h-[400px] bg-background-card rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={performanceData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--background-secondary)" />
          <XAxis 
            dataKey="data" 
            stroke="var(--text-secondary)"
            fontSize={12}
            tickMargin={10}
          />
          <YAxis 
            stroke="var(--text-secondary)"
            fontSize={12}
            tickFormatter={(value: number) => `R$ ${value.toLocaleString('pt-BR')}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? 'var(--background-card)' : '#fff',
              border: '1px solid var(--background-secondary)',
              borderRadius: '8px',
            }}
            labelStyle={{ color: 'var(--text-secondary)' }}
            formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Valor']}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="valor"
            name="Performance"
            stroke="var(--accent-primary)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}