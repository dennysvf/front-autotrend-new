'use client'

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
    <div className="bg-background-card p-6 rounded-lg">
      <h2 className="text-lg font-medium mb-4">Cotações</h2>
      <div className="text-sm text-text-secondary mb-2">Cotações em tempo real</div>
      
      <div className="space-y-4">
        {quotes.map((quote) => (
          <div key={quote.symbol} className="flex justify-between items-center">
            <span className="font-medium">{quote.symbol}</span>
            <div className="text-right">
              <div>R$ {quote.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
              <div className="text-sm text-text-secondary">{quote.change}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 