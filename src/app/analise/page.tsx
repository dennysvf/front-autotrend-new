'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { RobosList } from '@/components/analise/RobosList'
import { QuotesPanel } from '@/components/analise/QuotesPanel'
import { PositionsPanel } from '@/components/analise/PositionsPanel'
import { RoboStatusCard } from '@/components/robos/RoboStatusCard'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'

export default function AnaliseGeral() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Typography.H2>Análise Geral</Typography.H2>
          <Button variant="default" asChild>
            <a href="/robos">Ir para a listagem de robôs</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RoboStatusCard
            title="Robôs Executando"
            subtitle="Plano Diretoria E Parceiros"
            count={3}
            onStopAll={() => console.log('Parando todos os robôs')}
          />
          <QuotesPanel />
          <PositionsPanel />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <RobosList />
        </div>
      </div>
    </DashboardLayout>
  )
}