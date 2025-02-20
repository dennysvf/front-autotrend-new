'use client'

import { useState } from 'react'
import { Dialog, Tab } from '@headlessui/react'
import { Modal } from '@/components/ui/Modal'
import { RoboPerformanceChart } from './RoboPerformanceChart'
import { RoboOrders } from './RoboOrders'
import { RoboDetailedReport } from './RoboDetailedReport'

interface RoboDetailsModalProps {
  isOpen: boolean
  onClose: () => void
  robo: {
    id: string
    nome: string
    estrategia: string
    simulador: string
    retorno: string
    saldoDiario: number
  }
}

type TabType = 'diario' | 'historico'
type SubTabType = 'geral' | 'detalhado' | 'ordens' | 'grafico'

export function RoboDetailsModal({ isOpen, onClose, robo }: RoboDetailsModalProps) {
  const [mainTab, setMainTab] = useState<TabType>('diario')
  const [subTab, setSubTab] = useState<SubTabType>('geral')

  const stats = {
    diario: {
      retornoLiquido: 'R$ 0,00',
      patrimonio: 'R$ 0,00',
      drawdownMaximo: '0,00%',
      numeroTrades: '0',
    },
    historico: {
      retornoLiquido: 'R$ 791,00',
      patrimonio: 'R$ 10.791,00',
      drawdownMaximo: '69,58%',
      numeroTrades: '96',
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`${robo.nome} (#${robo.id})`} size="xl">
      <div className="space-y-4 sm:space-y-6">
        {/* Header com Informações do Robô */}
        <div className="bg-gradient-to-r from-background-secondary/10 to-background-secondary/5 rounded-lg p-3 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-text-secondary font-medium">Estratégia</h4>
              <p className="text-sm mt-1 truncate">{robo.estrategia}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-text-secondary font-medium">Simulador</h4>
              <p className="text-sm mt-1 truncate">{robo.simulador}</p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-text-secondary font-medium">Status</h4>
              <div className="mt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm">Ativo</span>
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-text-secondary font-medium">Saldo Diário</h4>
              <p className={`text-sm mt-1 font-medium ${robo.saldoDiario < 0 ? 'text-red-500' : 'text-green-500'}`}>
                R$ {robo.saldoDiario.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
          </div>
        </div>

        {/* Navegação Principal */}
        <div className="flex items-center gap-4 sm:gap-6 border-b border-background-secondary overflow-x-auto">
          {(['diario', 'historico'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setMainTab(tab)}
              className={`relative px-3 sm:px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${
                mainTab === tab
                  ? 'text-accent-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {mainTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Sub Navegação */}
        <div className="flex items-center gap-1 sm:gap-2 p-1 bg-background-secondary/5 rounded-lg overflow-x-auto">
          {(['geral', 'detalhado', 'ordens', 'grafico'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSubTab(tab)}
              className={`px-3 sm:px-4 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                subTab === tab
                  ? 'bg-background-card text-accent-primary shadow-sm ring-1 ring-background-secondary/10'
                  : 'text-text-secondary hover:text-text-primary hover:bg-background-secondary/10'
              }`}
            >
              {tab === 'geral' ? 'Relatório Geral' :
               tab === 'detalhado' ? 'Relatório Detalhado' :
               tab === 'ordens' ? 'Relação de Ordens' : 'Gráfico de Performance'}
            </button>
          ))}
        </div>

        {/* Conteúdo */}
        <div className="min-h-[400px] sm:min-h-[500px] bg-background-secondary/5 rounded-lg p-3 sm:p-6">
          {subTab === 'geral' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {Object.entries(mainTab === 'diario' ? stats.diario : stats.historico).map(([key, value]) => (
                <div key={key} className="bg-background-card rounded-lg p-3 sm:p-4 shadow-sm ring-1 ring-background-secondary/10">
                  <div className="flex items-start justify-between">
                    <h4 className="text-xs uppercase tracking-wider text-text-secondary font-medium">
                      {key === 'retornoLiquido' ? 'Retorno Líquido' :
                       key === 'patrimonio' ? 'Patrimônio' :
                       key === 'drawdownMaximo' ? 'Drawdown Máximo' : 'Número de Trades'}
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-background-secondary/20 text-text-secondary">
                      {mainTab}
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-semibold mt-2 bg-gradient-to-r from-accent-primary to-accent-secondary bg-clip-text text-transparent">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {subTab === 'detalhado' && <RoboDetailedReport />}
          {subTab === 'ordens' && <RoboOrders />}
          {subTab === 'grafico' && (
            <div className="space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="text-lg font-medium">Gráfico de Performance</h3>
                <div className="flex items-center gap-1 bg-background-secondary/10 rounded-md p-1">
                  {['1D', '1S', '1M', '1A'].map((period) => (
                    <button
                      key={period}
                      className="px-3 py-1.5 text-xs font-medium rounded transition-colors hover:bg-background-card hover:text-accent-primary"
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              <RoboPerformanceChart mainTab={mainTab} />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { label: 'Maior Alta', value: 'R$ 130.340,00', type: 'success' },
                  { label: 'Maior Baixa', value: 'R$ 129.090,00', type: 'danger' },
                  { label: 'Variação', value: '-0.96%', type: 'danger' },
                  { label: 'Volume', value: '12 trades', type: 'neutral' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-background-card rounded-lg p-3 sm:p-4 shadow-sm ring-1 ring-background-secondary/10">
                    <h4 className="text-xs uppercase tracking-wider text-text-secondary font-medium truncate">{stat.label}</h4>
                    <p className={`text-sm font-medium mt-1 ${
                      stat.type === 'success' ? 'text-green-500' :
                      stat.type === 'danger' ? 'text-red-500' :
                      'text-text-primary'
                    }`}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-3 pt-4 border-t border-background-secondary">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-sm font-medium rounded-lg hover:bg-background-secondary/10 transition-colors"
          >
            Fechar
          </button>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium rounded-lg bg-background-secondary/10 hover:bg-background-secondary/20 transition-colors">
              Exportar PDF
            </button>
            <button className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium rounded-lg bg-accent-primary text-white hover:bg-accent-primary/90 transition-colors">
              Exportar Dados
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
} 