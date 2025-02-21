'use client'

import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { Quote } from './Quote'

interface Quote {
  symbol: string
  price: number
  change: number
}

const quotes: Quote[] = [
  { symbol: 'WINJ25', price: 129390.00, change: 0.00 },
  { symbol: 'WING25', price: 126650.00, change: 0.00 },
  { symbol: 'WIN', price: 126650.00, change: 0.00 },
]

export function QuotesPanel() {
  return (
    <Card className="p-6">
      <Typography.H4 className="mb-4">Cotações</Typography.H4>
      <Typography.Text className="text-text-secondary mb-2 block">
        Cotações em tempo real
      </Typography.Text>
      
      <div className="space-y-2">
        {quotes.map((quote) => (
          <Quote
            key={quote.symbol}
            symbol={quote.symbol}
            price={quote.price}
            change={quote.change}
          />
        ))}
      </div>
    </Card>
  )
}