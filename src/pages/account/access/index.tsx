'use client'

import React from 'react'

interface AccessLog {
  ip: string
  date: string
  time: string
  userAgent: string
}

export default function AccessPage() {
  const [accessLogs] = React.useState<AccessLog[]>([
    {
      ip: '191.31.37.71',
      date: '20/02/2025',
      time: '07:44:29',
      userAgent: 'Go-http-client/1.1'
    },
    {
      ip: '191.31.37.71',
      date: '19/02/2025',
      time: '06:26:11',
      userAgent: 'Go-http-client/1.1'
    },
    {
      ip: '191.31.37.71',
      date: '18/02/2025',
      time: '18:45:07',
      userAgent: 'Go-http-client/1.1'
    },
    {
      ip: '191.31.40.171',
      date: '12/02/2025',
      time: '09:28:09',
      userAgent: 'Go-http-client/1.1'
    },
    {
      ip: '191.31.40.171',
      date: '11/02/2025',
      time: '11:47:39',
      userAgent: 'Go-http-client/1.1'
    },
    {
      ip: '191.31.40.171',
      date: '10/02/2025',
      time: '07:22:46',
      userAgent: 'Go-http-client/1.1'
    },
    {
      ip: '191.31.41.144',
      date: '24/01/2025',
      time: '11:07:56',
      userAgent: 'Go-http-client/1.1'
    },
    {
      ip: '191.31.41.144',
      date: '22/01/2025',
      time: '15:54:38',
      userAgent: 'Go-http-client/1.1'
    },
    {
      ip: '191.31.41.144',
      date: '21/01/2025',
      time: '08:57:57',
      userAgent: 'Go-http-client/1.1'
    },
    {
      ip: '152.241.78.178',
      date: '17/01/2025',
      time: '09:58:24',
      userAgent: 'Go-http-client/1.1'
    },
    {
      ip: '152.241.78.178',
      date: '16/01/2025',
      time: '17:42:08',
      userAgent: 'Go-http-client/1.1'
    },
    {
      ip: '152.241.78.178',
      date: '15/01/2025',
      time: '11:16:43',
      userAgent: 'Go-http-client/1.1'
    }
  ])

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-medium">Histórico de Últimos Acessos</h2>
        <p className="text-sm text-gray-500">
          Veja o histórico dos últimos logins, com endereço IP, data e horário de acesso a sua conta.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 text-sm font-medium text-gray-600">
          <div>Endereço de IP</div>
          <div>Data</div>
          <div>Hora</div>
          <div>User Agent</div>
        </div>

        <div className="divide-y divide-gray-100">
          {accessLogs.map((log, index) => (
            <div
              key={index}
              className="grid grid-cols-4 gap-4 p-4 text-sm hover:bg-gray-50 transition-colors"
            >
              <div className="text-gray-900">{log.ip}</div>
              <div className="text-gray-600">{log.date}</div>
              <div className="text-gray-600">{log.time}</div>
              <div className="text-gray-600 font-mono">{log.userAgent}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 