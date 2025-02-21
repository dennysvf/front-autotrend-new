'use client'

import React from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Accordion } from '@/components/ui/Accordion'
import { DashboardLayout } from '@/components/layout/DashboardLayout'

interface PaymentMethod {
  type: 'credit_card' | 'pix'
  last4?: string
  brand?: string
  expiry?: string
  isDefault: boolean
}

interface Invoice {
  id: string
  date: string
  amount: number
  status: 'paid' | 'pending' | 'overdue'
  paymentMethod: string
}

export default function FinancialPage() {
  const [currentPlan] = React.useState({
    name: 'Gratuito',
    status: 'active',
    startDate: '2024-03-01',
    endDate: '2024-03-31',
    renewalFrequency: 'Mensal'
  })

  const [paymentMethods] = React.useState<PaymentMethod[]>([
    {
      type: 'credit_card',
      last4: '4242',
      brand: 'Mastercard',
      expiry: '12/25',
      isDefault: true
    },
    {
      type: 'pix',
      isDefault: false
    }
  ])

  const [invoices] = React.useState<Invoice[]>([
    {
      id: '1',
      date: '01/03/2024',
      amount: 97.00,
      status: 'paid',
      paymentMethod: 'Cartão de Crédito'
    },
    {
      id: '2',
      date: '01/02/2024',
      amount: 97.00,
      status: 'paid',
      paymentMethod: 'Cartão de Crédito'
    }
  ])

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-text-primary">Financeiro</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-lg font-medium mb-4">Plano Atual</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Plano</span>
                <span className="font-medium">{currentPlan.name}</span>
              </div>
              {/* ... resto dos detalhes do plano ... */}
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-medium mb-4">Formas de Pagamento</h2>
            <div className="space-y-4">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex justify-between items-center">
                  {/* ... detalhes do método de pagamento ... */}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card>
          <h2 className="text-lg font-medium mb-4">Histórico de Faturas</h2>
          <div className="space-y-4">
            {invoices.map((invoice) => (
              <div key={invoice.id} className="flex justify-between items-center">
                {/* ... detalhes da fatura ... */}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  )
}