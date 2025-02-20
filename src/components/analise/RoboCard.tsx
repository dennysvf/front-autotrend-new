'use client'

interface RoboData {
  id: string
  name: string
  strategy: string
  type: 'otimista' | 'pessimista'
  dailyBalance: number
  positionBalance: number
  positionQty: number
  averagePrice: number
  percentageResult: number
  maxDrawdown: number
}

const robosData: RoboData[] = [
  {
    id: '#33266',
    name: 'gla teste rational',
    strategy: 'Estratégia: Gradiente L...',
    type: 'otimista',
    dailyBalance: -304.00,
    positionBalance: 0.00,
    positionQty: 0,
    averagePrice: 130322.10,
    percentageResult: 0.00,
    maxDrawdown: 0.00,
  },
  {
    id: '#32930',
    name: 'GL 2.9 COMPRA PESSIMISTA',
    strategy: 'Estratégia: Gradiente L...',
    type: 'pessimista',
    dailyBalance: -2171.00,
    positionBalance: -930.21,
    positionQty: 21,
    averagePrice: 129476.48,
    percentageResult: 0.00,
    maxDrawdown: 0.00,
  },
  {
    id: '#32929',
    name: 'GL 2.7 VENDA PESSIMISTA',
    strategy: 'Estratégia: Gradiente L...',
    type: 'pessimista',
    dailyBalance: 1660.00,
    positionBalance: 0.00,
    positionQty: 0,
    averagePrice: 129315.00,
    percentageResult: 0.00,
    maxDrawdown: 0.00,
  }
]

export function RoboCard() {
  return (
    <div className="bg-background-card rounded-lg border border-background-secondary hover:border-accent-primary/20 transition-colors">
      <div className="grid grid-cols-[1fr,1fr,1fr,120px,120px,80px] text-sm border-b border-background-secondary">
        <div className="p-4 font-medium text-text-primary">Robô</div>
        <div className="p-4 font-medium text-text-primary">Saldo Diário</div>
        <div className="p-4 font-medium text-text-primary">Saldo Posição</div>
        <div className="p-4 font-medium text-text-primary text-right">Qtde. Posição</div>
        <div className="p-4 font-medium text-text-primary text-right">Preço Médio</div>
        <div className="p-4 font-medium text-text-primary text-center">Ações</div>
      </div>

      {robosData.map((robo) => (
        <div 
          key={robo.id}
          className="grid grid-cols-[1fr,1fr,1fr,120px,120px,80px] text-sm border-b border-background-secondary hover:bg-background-secondary/30 transition-colors"
        >
          <div className="p-4">
            <div className="flex items-center gap-2">
              <span className="text-text-secondary">{robo.id}</span>
              <span className="font-medium text-text-primary">{robo.name}</span>
              <span className={`text-xs ${
                robo.type === 'otimista' 
                  ? 'text-states-success' 
                  : 'text-states-error'
              }`}>
                {robo.type}
              </span>
            </div>
            <div className="text-xs text-text-secondary mt-1">{robo.strategy}</div>
          </div>

          <div className="p-4">
            <div className={`${
              robo.dailyBalance < 0 
                ? 'text-states-error' 
                : 'text-states-success'
            }`}>
              R$ {robo.dailyBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-text-secondary mt-1">
              Resultado Percentual: {robo.percentageResult}%
            </div>
          </div>

          <div className="p-4">
            <div className={`${
              robo.positionBalance < 0 
                ? 'text-states-error' 
                : 'text-text-primary'
            }`}>
              R$ {robo.positionBalance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-text-secondary mt-1">
              Drawdown Máximo: {robo.maxDrawdown}%
            </div>
          </div>

          <div className="p-4 text-right self-center text-text-primary">
            {robo.positionQty}
          </div>

          <div className="p-4 text-right self-center text-text-primary">
            {robo.averagePrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>

          <div className="p-4 flex items-center justify-center gap-2 self-center">
            <button className="p-1.5 rounded-lg bg-background-secondary hover:bg-background-secondary/70 transition-colors text-text-primary">
              🔄
            </button>
            <button className="p-1.5 rounded-lg bg-background-secondary hover:bg-background-secondary/70 transition-colors text-text-primary">
              ⏸️
            </button>
          </div>
        </div>
      ))}
    </div>
  )
} 