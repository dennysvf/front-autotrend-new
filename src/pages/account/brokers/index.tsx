'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Pencil, Trash2 } from 'lucide-react'

interface Broker {
  id: string
  name: string
  logo: string
  cblcCode: string
  status: 'Autorizada' | 'Pendente' | 'Bloqueada'
}

export default function BrokersPage() {
  const [brokers] = React.useState<Broker[]>([
    {
      id: '1',
      name: 'BRK',
      logo: '/broker-logos/brk.png',
      cblcCode: '2010559824',
      status: 'Autorizada'
    },
    {
      id: '2',
      name: 'Liqi',
      logo: '/broker-logos/liqi.png',
      cblcCode: '123',
      status: 'Autorizada'
    },
    {
      id: '3',
      name: 'Mercado BitCoin',
      logo: '/broker-logos/mercado-bitcoin.png',
      cblcCode: '1',
      status: 'Autorizada'
    },
    {
      id: '4',
      name: 'Terra',
      logo: '/broker-logos/terra.png',
      cblcCode: '55902',
      status: 'Autorizada'
    },
    {
      id: '5',
      name: 'Órama',
      logo: '/broker-logos/orama.png',
      cblcCode: '272791',
      status: 'Autorizada'
    }
  ])

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Button variant="primary">Nova Corretora</Button>
        <Button variant="outline">Listar Corretoras</Button>
      </div>

      <div className="bg-gray-50 rounded-lg">
        <div className="grid grid-cols-[1fr,auto,auto] gap-4 p-4 font-medium text-gray-600">
          <div className="flex items-center gap-4">
            <span>Corretora</span>
          </div>
          <div className="text-right">Código CBLC</div>
          <div className="text-right pr-4">Status</div>
        </div>

        <div className="bg-white rounded-lg">
          {brokers.map((broker) => (
            <div
              key={broker.id}
              className="grid grid-cols-[1fr,auto,auto] gap-4 p-4 items-center border-b last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 relative flex-shrink-0">
                  <Image
                    src={broker.logo}
                    alt={broker.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-medium">{broker.name}</span>
              </div>
              
              <div className="text-right text-gray-600">
                {broker.cblcCode}
              </div>

              <div className="flex items-center gap-4 justify-end">
                <span className={`
                  px-3 py-1 rounded-full text-sm
                  ${broker.status === 'Autorizada' ? 'text-green-700 bg-green-50' : ''}
                  ${broker.status === 'Pendente' ? 'text-yellow-700 bg-yellow-50' : ''}
                  ${broker.status === 'Bloqueada' ? 'text-red-700 bg-red-50' : ''}
                `}>
                  {broker.status}
                </span>

                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 