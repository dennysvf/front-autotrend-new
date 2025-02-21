'use client'

import { Typography } from '@/components/ui/Typography'
import { cn } from '@/lib/utils'

interface PositionProps {
  symbol: string
  type: string
  result: number
  quantity: number
}

export function Position({ symbol, type, result, quantity }: PositionProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-background-secondary/20 rounded-lg hover:bg-background-secondary/30 transition-colors">
      <div>
        <Typography.Text className="font-medium">{symbol}</Typography.Text>
        <Typography.Text className="text-text-secondary text-sm">
          {type}
        </Typography.Text>
      </div>
      <div className="text-right">
        <Typography.Text 
          className={cn(
            "font-medium",
            result >= 0 ? "text-states-success" : "text-states-error"
          )}
        >
          R$ {result.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </Typography.Text>
        <Typography.Text className="text-text-secondary text-sm">
          {quantity} contratos
        </Typography.Text>
      </div>
    </div>
  )
}