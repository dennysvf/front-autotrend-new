'use client'

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
  },
  // Adicione mais posições conforme necessário
]

export function PositionsPanel() {
  return (
    <div className="bg-background-card rounded-lg border border-background-secondary p-6">
      <h2 className="text-lg font-medium text-text-primary mb-4">Posições Abertas</h2>
      
      <div className="space-y-4">
        {positions.map((position) => (
          <div key={position.id} className="flex items-center justify-between p-4 bg-background-secondary/20 rounded-lg">
            <div>
              <p className="font-medium text-text-primary">{position.symbol}</p>
              <p className="text-sm text-text-secondary">{position.type}</p>
            </div>
            <div className="text-right">
              <p className={`font-medium ${
                position.result >= 0 ? 'text-states-success' : 'text-states-error'
              }`}>
                R$ {position.result.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
              <p className="text-sm text-text-secondary">
                {position.quantity} contratos
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 