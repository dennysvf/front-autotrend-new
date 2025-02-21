'use client'

import { Typography } from '@/components/ui/Typography'
import { cn } from '@/lib/utils'

interface QuoteProps {
  symbol: string
  price: number
  change: number
}

export function Quote({ symbol, price, change }: QuoteProps) {
  const isPositive = change > 0
  const isNegative = change < 0

  return (
    <div className="flex justify-between items-center p-3 rounded-lg hover:bg-background-secondary/5 transition-colors">
      <Typography.Text className="font-medium">{symbol}</Typography.Text>
      <div className="text-right">
        <Typography.Text>
          R$ {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </Typography.Text>
        <Typography.Text 
          className={cn(
            "text-sm",
            isPositive && "text-states-success",
            isNegative && "text-states-error",
            !isPositive && !isNegative && "text-text-secondary"
          )}
        >
          {change > 0 && '+'}
          {change}%
        </Typography.Text>
      </div>
    </div>
  )
}