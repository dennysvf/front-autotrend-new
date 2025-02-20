'use client'

const stats = [
  {
    title: 'Retorno Líquido',
    value: 'R$ 0,00',
  },
  {
    title: 'Patrimônio',
    value: 'R$ 0,00',
  },
  {
    title: 'Drawdown Máximo',
    value: '0,00%',
  },
  {
    title: 'Número de Trades',
    value: '0',
  },
]

export function RoboStats() {
  return (
    <>
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="p-6 rounded-xl bg-background-card border border-background-secondary shadow-lg"
        >
          <h3 className="text-text-secondary text-sm">{stat.title}</h3>
          <p className="text-xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </>
  )
} 