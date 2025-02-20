'use client'

import React from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Accordion } from '@/components/ui/Accordion'
import Image from 'next/image'

interface PaymentMethod {
  type: 'credit_card'
  brand: string
  last4: string
  holder: string
  expiry: string
}

interface Transaction {
  date: string
  description: string
  period: string
  paymentMethod: string
  amount: number
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
      brand: 'mastercard',
      last4: '9320',
      holder: 'GENNYS VIANA FREIRE',
      expiry: '10/2028'
    }
  ])

  const [transactions] = React.useState<Transaction[]>([])

  return (
    <div className="space-y-6">
      <Accordion type="single" defaultValue="plans" className="space-y-4">
        {/* Planos */}
        <Accordion.Item value="plans">
          <Accordion.Trigger className="w-full">
            <div className="flex items-center gap-2">
              <span className="font-medium">Planos</span>
            </div>
          </Accordion.Trigger>
          <Accordion.Content>
            <div className="pt-4 space-y-4">
              <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
                <div>
                  <h3 className="font-medium">Fatura Mensal Atual</h3>
                  <p className="text-sm text-gray-500">{currentPlan.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Contratado</span>
                  <p>Diretoria e Parceiros</p>
                </div>
                <div>
                  <span className="text-gray-500">Início</span>
                  <p>{new Date(currentPlan.startDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <span className="text-gray-500">Vencimento</span>
                  <p>{new Date(currentPlan.endDate).toLocaleDateString()}</p>
                </div>
                <div>
                  <span className="text-gray-500">Frequência da Renovação</span>
                  <p>{currentPlan.renewalFrequency}</p>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        {/* Assinatura e Cobrança */}
        <Accordion.Item value="subscription">
          <Accordion.Trigger className="w-full">
            <div className="flex items-center gap-2">
              <span className="font-medium">Assinatura e Cobrança</span>
            </div>
          </Accordion.Trigger>
          <Accordion.Content>
            <div className="pt-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-600">
                  Você está utilizando um plano gratuito
                </p>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        {/* Estratégias e Cobrança */}
        <Accordion.Item value="strategies">
          <Accordion.Trigger className="w-full">
            <div className="flex items-center gap-2">
              <span className="font-medium">Estratégias e Cobrança</span>
            </div>
          </Accordion.Trigger>
          <Accordion.Content>
            <div className="pt-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-600">
                  Você não possui nenhuma estratégia
                </p>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        {/* Pagamento */}
        <Accordion.Item value="payment">
          <Accordion.Trigger className="w-full">
            <div className="flex items-center gap-2">
              <span className="font-medium">Pagamento</span>
            </div>
          </Accordion.Trigger>
          <Accordion.Content>
            <div className="pt-4 space-y-4">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <Image
                      src={`/card-brands/${method.brand}.svg`}
                      alt={method.brand}
                      width={32}
                      height={24}
                    />
                    <div>
                      <p className="font-medium">•••• •••• •••• {method.last4}</p>
                      <p className="text-sm text-gray-500">{method.holder}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Expira em {method.expiry}</span>
                    <Button variant="primary" size="sm">
                      Remover
                    </Button>
                  </div>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                Adicionar um cartão
              </Button>
            </div>
          </Accordion.Content>
        </Accordion.Item>

        {/* Detalhes da Cobrança */}
        <Accordion.Item value="billing-details">
          <Accordion.Trigger className="w-full">
            <div className="flex items-center gap-2">
              <span className="font-medium">Detalhes da Cobrança</span>
            </div>
          </Accordion.Trigger>
          <Accordion.Content>
            <div className="pt-4">
              <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 text-sm font-medium">
                  <Button variant="primary" className="w-full">
                    Planos
                  </Button>
                  <Button variant="outline" className="w-full">
                    Estratégias
                  </Button>
                </div>

                <div className="p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500">
                        <th className="py-2">Data do Pagamento</th>
                        <th>Descrição da Transação</th>
                        <th>Período</th>
                        <th>Forma de Pagamento</th>
                        <th className="text-right">Valor (R$)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="text-center py-4 text-gray-500">
                            Nenhuma transação encontrada
                          </td>
                        </tr>
                      ) : (
                        transactions.map((transaction, index) => (
                          <tr key={index}>
                            <td className="py-2">{transaction.date}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.period}</td>
                            <td>{transaction.paymentMethod}</td>
                            <td className="text-right">{transaction.amount.toFixed(2)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  )
} 