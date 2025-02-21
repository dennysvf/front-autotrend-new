'use client'

import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { ChartBar, RefreshCw, Pause } from 'lucide-react'

interface RoboItemProps {
  id: string
  nome: string
  estrategia: string
  simulador: string
  retorno: string
  saldoDiario: number
  onViewDetails: () => void
}

export function RoboItem({
  id,
  nome,
  estrategia,
  simulador,
  retorno,
  saldoDiario,
  onViewDetails
}: RoboItemProps) {
  return (
    <tr className="border-b border-background-secondary/50 hover:bg-background-secondary/5">
      <td className="py-4">
        <Typography.Text>#{id}</Typography.Text>
      </td>
      <td className="py-4">
        <Typography.Text>{nome}</Typography.Text>
      </td>
      <td className="py-4">
        <Typography.Text>{estrategia}</Typography.Text>
      </td>
      <td className="py-4">
        <Typography.Text>{simulador}</Typography.Text>
      </td>
      <td className="py-4">
        <Typography.Text>{retorno}</Typography.Text>
      </td>
      <td className="py-4">
        <Typography.Text className={saldoDiario < 0 ? 'text-states-error' : 'text-states-success'}>
          R$ {saldoDiario.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
        </Typography.Text>
      </td>
      <td className="py-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={onViewDetails}
            title="Ver detalhes"
          >
            <ChartBar className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            title="Reiniciar"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            title="Pausar"
          >
            <Pause className="h-4 w-4" />
          </Button>
        </div>
      </td>
    </tr>
  )
}