'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { useState } from 'react'
import { PlanGrid } from '@/components/plans/PlanGrid'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'

interface PlanFeature {
  title: string
  included: boolean
}

interface Plan {
  id: string
  name: string
  price: number
  period: string
  description: string
  features: PlanFeature[]
  recommended?: boolean
}

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Básico',
    price: 99.90,
    period: 'mês',
    description: 'Ideal para começar a operar com robôs',
    features: [
      { title: '3 Robôs Simultâneos', included: true },
      { title: 'Backtest Ilimitado', included: true },
      { title: 'Suporte por Email', included: true },
      { title: 'Análise Básica', included: true },
      { title: 'Estratégias Premium', included: false },
      { title: 'Suporte 24/7', included: false },
    ]
  },
  {
    id: 'pro',
    name: 'Profissional',
    price: 199.90,
    period: 'mês',
    description: 'Para traders que buscam mais recursos',
    recommended: true,
    features: [
      { title: '10 Robôs Simultâneos', included: true },
      { title: 'Backtest Ilimitado', included: true },
      { title: 'Suporte Prioritário', included: true },
      { title: 'Análise Avançada', included: true },
      { title: 'Estratégias Premium', included: true },
      { title: 'Suporte 24/7', included: true },
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 499.90,
    period: 'mês',
    description: 'Solução completa para empresas',
    features: [
      { title: 'Robôs Ilimitados', included: true },
      { title: 'Backtest Ilimitado', included: true },
      { title: 'Suporte Dedicado', included: true },
      { title: 'Análise Personalizada', included: true },
      { title: 'Estratégias Customizadas', included: true },
      { title: 'API Exclusiva', included: true },
    ]
  }
]

export default function PlansPage() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly')
  const [currentPlan, setCurrentPlan] = useState('pro')

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Typography.H2>Planos e Preços</Typography.H2>
          
          <div className="bg-background-secondary/30 p-1 rounded-lg">
            <Button
              variant={billingPeriod === 'monthly' ? 'default' : 'ghost'}
              onClick={() => setBillingPeriod('monthly')}
            >
              Mensal
            </Button>
            <Button
              variant={billingPeriod === 'yearly' ? 'default' : 'ghost'}
              onClick={() => setBillingPeriod('yearly')}
            >
              Anual
              <span className="ml-1 text-xs text-states-success">-20%</span>
            </Button>
          </div>
        </div>

        <PlanGrid
          plans={plans}
          currentPlan={currentPlan}
          yearlyBilling={billingPeriod === 'yearly'}
          onSelectPlan={setCurrentPlan}
        />
      </div>
    </DashboardLayout>
  )
}