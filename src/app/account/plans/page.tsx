'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { useState } from 'react'
import { Check } from 'lucide-react'

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
          <h1 className="text-2xl font-bold">Planos e Preços</h1>
          
          <div className="bg-background-secondary/30 p-1 rounded-lg">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                billingPeriod === 'monthly'
                  ? 'bg-background-card text-accent-primary shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                billingPeriod === 'yearly'
                  ? 'bg-background-card text-accent-primary shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Anual
              <span className="ml-1 text-xs text-states-success">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-background-card rounded-xl border transition-all duration-300 ${
                plan.recommended
                  ? 'border-accent-primary shadow-lg shadow-accent-primary/5 scale-105'
                  : 'border-background-secondary hover:border-accent-primary/20'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-primary text-white text-sm font-medium rounded-full">
                  Recomendado
                </div>
              )}

              <div className="p-6 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-text-secondary mt-1">{plan.description}</p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <span className="text-3xl font-bold">R$</span>
                    <span className="text-5xl font-bold">
                      {billingPeriod === 'yearly' 
                        ? (plan.price * 0.8).toFixed(2) 
                        : plan.price.toFixed(2)}
                    </span>
                  </div>
                  <span className="text-text-secondary">/{plan.period}</span>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`flex-shrink-0 rounded-full p-1 ${
                        feature.included ? 'text-states-success' : 'text-text-secondary'
                      }`}>
                        <Check size={16} />
                      </div>
                      <span className={feature.included ? 'text-text-primary' : 'text-text-secondary'}>
                        {feature.title}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentPlan(plan.id)}
                  className={`w-full py-2 px-4 rounded-lg transition-colors ${
                    currentPlan === plan.id
                      ? 'bg-accent-primary text-white hover:bg-accent-primary/90'
                      : 'bg-background-secondary hover:bg-background-secondary/70 text-text-primary'
                  }`}
                >
                  {currentPlan === plan.id ? 'Plano Atual' : 'Selecionar Plano'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
} 