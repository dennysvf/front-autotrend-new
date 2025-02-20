'use client'

import React from 'react'
import { Switch } from '@/components/ui/Switch'
import { Select } from '@/components/ui/Select'
import Image from 'next/image'

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
      id: 'confirm-zero',
      label: 'Exibir mensagem de confirmação ao zerar posição de um robô',
      enabled: false
    }
  ])

  const [realPreferences, setRealPreferences] = React.useState<PreferenceOption[]>([
    {
      id: 'confirm-save-real',
      label: 'Exibir mensagem de confirmação ao salvar parâmetros de um robô em modo real',
      enabled: false
    },
    {
      id: 'confirm-stop-real',
      label: 'Exibir mensagem de confirmação ao parar e zerar um robô em modo real',
      enabled: false
    },
    {
      id: 'confirm-zero-real',
      label: 'Exibir mensagem de confirmação ao zerar posição de um robô em modo real',
      enabled: false
    },
    {
      id: 'require-password-stop',
      label: 'Exigir senha para parar e zerar robôs em conta real',
      enabled: false
    },
    {
      id: 'require-password-execute',
      label: 'Exigir senha para executar robôs em conta real',
      enabled: false
    },
    {
      id: 'require-password-zero',
      label: 'Exigir senha para zerar posição de robôs em conta real',
      enabled: false
    }
  ])

  const [selectedSimulator, setSelectedSimulator] = React.useState('otimista')

  const togglePreference = (id: string, isSimulated: boolean) => {
    if (isSimulated) {
      setSimulatedPreferences(prefs => 
        prefs.map(pref => 
          pref.id === id ? { ...pref, enabled: !pref.enabled } : pref
        )
      )
    } else {
      setRealPreferences(prefs => 
        prefs.map(pref => 
          pref.id === id ? { ...pref, enabled: !pref.enabled } : pref
        )
      )
    }
  }

  return (
    <div className="space-y-8">
      {/* Modo Simulado */}
      <section className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex items-center gap-6 mb-6">
          <Image
            src="/test-tubes-icon.png"
            alt="Modo Simulado"
            width={48}
            height={48}
          />
          <h2 className="text-xl font-medium">Preferências Modo Simulado</h2>
        </div>

        <div className="space-y-4">
          {simulatedPreferences.map(pref => (
            <div key={pref.id} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{pref.label}</span>
              <Switch
                checked={pref.enabled}
                onCheckedChange={() => togglePreference(pref.id, true)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modo Real */}
      <section className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex items-center gap-6 mb-6">
          <Image
            src="/chart-icon.png"
            alt="Modo Real"
            width={48}
            height={48}
          />
          <h2 className="text-xl font-medium">Preferências Modo Real</h2>
        </div>

        <div className="space-y-4">
          {realPreferences.map(pref => (
            <div key={pref.id} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{pref.label}</span>
              <Switch
                checked={pref.enabled}
                onCheckedChange={() => togglePreference(pref.id, false)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Preferências de Simulador */}
      <section className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-medium mb-4">Preferências de Simulador</h2>
        <div className="space-y-2">
          <p className="text-sm text-gray-600">Ao criar um robô, predefinir simulador como:</p>
          <Select
            value={selectedSimulator}
            onValueChange={setSelectedSimulator}
            options={[
              { value: 'otimista', label: 'Otimista' },
              { value: 'realista', label: 'Realista' },
              { value: 'pessimista', label: 'Pessimista' }
            ]}
            className="w-full max-w-xs"
          />
        </div>
      </section>
    </div>
  )
} 