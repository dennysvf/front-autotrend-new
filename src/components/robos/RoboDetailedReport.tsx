'use client'

interface ReportSection {
  title: string
  items: {
    label: string
    value: string | number
  }[]
}

const reportSections: ReportSection[] = [
  {
    title: 'Financeiro',
    items: [
      { label: 'Saldo Inicial', value: 'R$ 0,00' },
      { label: 'Resultado', value: 'R$ 0,00' },
      { label: 'Taxas', value: 'R$ 0,00' },
    ]
  },
  {
    title: 'Trades',
    items: [
      { label: 'Total de Trades', value: 0 },
      { label: 'Trades com Lucro', value: 0 },
      { label: 'Trades com Prejuízo', value: 0 },
    ]
  },
  {
    title: 'Risco',
    items: [
      { label: 'Fator de Lucro', value: 0 },
      { label: 'Drawdown Absoluto', value: 0 },
      { label: 'Drawdown Relativo (%)', value: 0 },
      { label: 'Drawdown Máximo Absoluto', value: 0 },
      { label: 'Drawdown Máximo Relativo (%)', value: 0 },
    ]
  },
  {
    title: 'Consolidação',
    items: [
      { label: 'Número de Trades', value: 0 },
      { label: 'Lucro Bruto', value: 'R$ 0,00' },
      { label: 'Prejuízo Bruto', value: 'R$ 0,00' },
      { label: 'Resultado Bruto', value: 'R$ 0,00' },
    ]
  }
]

export function RoboDetailedReport() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {reportSections.map((section) => (
        <div 
          key={section.title}
          className="bg-background-secondary/10 rounded-lg overflow-hidden"
        >
          <div className="bg-background-secondary/20 px-4 py-2">
            <h3 className="font-medium">{section.title}</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {section.items.map((item) => (
                <div key={item.label} className="flex justify-between items-center">
                  <span className="text-sm text-text-secondary">{item.label}</span>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
} 