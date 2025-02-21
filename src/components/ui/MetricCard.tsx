'use client'

import { Card } from './Card'
import { Typography } from './Typography'
import { cn } from '@/lib/utils'
import { ArrowUp, ArrowDown } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  change?: {
    value: number
    trend: 'up' | 'down'
  }
  loading?: boolean
}

export function MetricCard({ title, value, change, loading }: MetricCardProps) {
  if (loading) {
    return (
      <Card className="p-6">
        <div className="space-y-2">
          <div className="h-4 w-24 bg-background-secondary/20 rounded animate-pulse" />
          <div className="h-8 w-32 bg-background-secondary/20 rounded animate-pulse" />
          {change && (
            <div className="h-4 w-16 bg-background-secondary/20 rounded animate-pulse" />
          )}
        </div>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <div className="space-y-2">
        <Typography.Text className="text-text-secondary">
          {title}
        </Typography.Text>
        
        <Typography.H3>{value}</Typography.H3>
        
        {change && (
          <div className="flex items-center gap-1">
            {change.trend === 'up' ? (
              <ArrowUp className="w-4 h-4 text-states-success" />
            ) : (
              <ArrowDown className="w-4 h-4 text-states-error" />
            )}
            <Typography.Text
              className={cn(
                change.trend === 'up' ? 'text-states-success' : 'text-states-error'
              )}
            >
              {change.value}%
            </Typography.Text>
          </div>
        )}
      </div>
    </Card>
  )
}