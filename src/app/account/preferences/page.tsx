'use client'

import React from 'react'
import { Switch } from '@/components/ui/Switch'
import { Select } from '@/components/ui/Select'
import { DashboardLayout } from '@/components/layout/DashboardLayout'

interface PreferenceOption {
  id: string
  label: string
  enabled: boolean
}

export default function PreferencesPage() {
  const [simulatedPreferences, setSimulatedPreferences] = React.useState<PreferenceOption[]>([
    {
      id: 'confirm-save',
      label: 'Exibir mensagem de confirmação ao salvar parâmetros de um robô',
      enabled: false
    },
    {
      id: 'confirm-stop',
      label: 'Exibir mensagem de confirmação ao parar e zerar um robô',
      enabled: false
    },
    {
      id: 'confirm-delete',
      label: 'Exibir mensagem de confirmação ao excluir um robô',
      enabled: true
    }
  ])

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-text-primary">Preferências</h1>

        <div className="bg-background-card rounded-lg border border-background-secondary">
          <div className="p-6">
            <h2 className="text-lg font-medium mb-4 text-text-primary">Simulado</h2>
            <div className="space-y-6">
              {simulatedPreferences.map((preference) => (
                <div key={preference.id} className="flex items-center justify-between">
                  <span className="text-text-primary">{preference.label}</span>
                  <Switch
                    defaultChecked={preference.enabled}
                    onCheckedChange={(checked: boolean) => {
                      setSimulatedPreferences(prev =>
                        prev.map(p =>
                          p.id === preference.id ? { ...p, enabled: checked } : p
                        )
                      )
                    }}
                    size="md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-background-card rounded-lg border border-background-secondary">
          <div className="p-6">
            <h2 className="text-lg font-medium mb-4 text-text-primary">Notificações</h2>
            <div className="space-y-6">
              {/* Notification preferences */}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}