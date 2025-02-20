'use client'

import { useState } from 'react'
import { RoboDetailsModal } from './RoboDetailsModal'

interface Robo {
  id: string
  nome: string
  estrategia: string
  simulador: string
  retorno: string
  saldoDiario: number
  status: string
}

interface RobosListProps {
  status: 'executando' | 'parados' | 'arquivados'
}

const robos: Robo[] = [
  {
    id: '33266',
    nome: 'Gla Teste Rational',
    estrategia: 'Gradiente Linear Adaptativo',
    simulador: 'Otimista',
    retorno: '-',
    saldoDiario: -304.00,
    status: 'executando'
  },
  {
    id: '32930',
    nome: 'GL 2.9 COMPRA PESSIMISTA',
    estrategia: 'Gradiente Linear 2.7',
    simulador: 'Pessimista',
    retorno: '-',
    saldoDiario: -2171.00,
    status: 'executando'
  },
  // Adicione mais robôs conforme necessário
]

export function RobosList({ status }: RobosListProps) {
  const [selectedRobo, setSelectedRobo] = useState<Robo | null>(null)
  const filteredRobos = robos.filter(robo => robo.status === status)

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-background-secondary">
              <th className="pb-3 font-medium text-text-secondary">ID</th>
              <th className="pb-3 font-medium text-text-secondary">Nome</th>
              <th className="pb-3 font-medium text-text-secondary">Estratégia</th>
              <th className="pb-3 font-medium text-text-secondary">Simulador</th>
              <th className="pb-3 font-medium text-text-secondary">Retorno</th>
              <th className="pb-3 font-medium text-text-secondary">Saldo Diário</th>
              <th className="pb-3 font-medium text-text-secondary">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredRobos.map((robo) => (
              <tr key={robo.id} className="border-b border-background-secondary/50 hover:bg-background-secondary/5">
                <td className="py-4">#{robo.id}</td>
                <td className="py-4">{robo.nome}</td>
                <td className="py-4">{robo.estrategia}</td>
                <td className="py-4">{robo.simulador}</td>
                <td className="py-4">{robo.retorno}</td>
                <td className={`py-4 ${robo.saldoDiario < 0 ? 'text-red-500' : 'text-green-500'}`}>
                  R$ {robo.saldoDiario.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setSelectedRobo(robo)}
                      className="p-1.5 rounded-lg bg-background-secondary hover:bg-background-secondary/70 transition-colors"
                      title="Ver detalhes"
                    >
                      📊
                    </button>
                    <button className="p-1.5 rounded-lg bg-background-secondary hover:bg-background-secondary/70 transition-colors">
                      🔄
                    </button>
                    <button className="p-1.5 rounded-lg bg-background-secondary hover:bg-background-secondary/70 transition-colors">
                      ⏸️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedRobo && (
        <RoboDetailsModal
          isOpen={!!selectedRobo}
          onClose={() => setSelectedRobo(null)}
          robo={selectedRobo}
        />
      )}
    </>
  )
} 