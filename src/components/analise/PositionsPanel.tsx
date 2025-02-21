'use client'

import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { Position } from './Position'

interface Position {
  id: string
  symbol: string
  type: string
  result: number
  quantity: number
}

const positions: Position[] = [
  {
    id: '1',
    symbol: 'WIN.V24',
    type: 'Comprado',
    result: 1250.00,
    quantity: 2
  },
  {
    id: '2',
    symbol: 'IND.V24',
    type: 'Vendido',
    result: -930.21,
    quantity: 1
  }
]

export function PositionsPanel() {
  return (
    <Card className="p-6">
      <Typography.H4 className="mb-4">Posições Abertas</Typography.H4>
      
      <div className="space-y-4">
        {positions.map((position) => (
          <Position
            key={position.id}
            symbol={position.symbol}
            type={position.type}
            result={position.result}
            quantity={position.quantity}
          />
        ))}
      </div>
    </Card>
  )
}