'use client'

import { useState } from 'react'
import { RoboItem } from './RoboItem'
import { RoboDetailsModal } from './RoboDetailsModal'
import { Typography } from '@/components/ui/Typography'

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
              <th className="pb-3">
                <Typography.Text variant="secondary">ID</Typography.Text>
              </th>
              <th className="pb-3">
                <Typography.Text variant="secondary">Nome</Typography.Text>
              </th>
              <th className="pb-3">
                <Typography.Text variant="secondary">Estratégia</Typography.Text>
              </th>
              <th className="pb-3">
                <Typography.Text variant="secondary">Simulador</Typography.Text>
              </th>
              <th className="pb-3">
                <Typography.Text variant="secondary">Retorno</Typography.Text>
              </th>
              <th className="pb-3">
                <Typography.Text variant="secondary">Saldo Diário</Typography.Text>
              </th>
              <th className="pb-3">
                <Typography.Text variant="secondary">Ações</Typography.Text>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRobos.map((robo) => (
              <RoboItem
                key={robo.id}
                {...robo}
                onViewDetails={() => setSelectedRobo(robo)}
              />
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