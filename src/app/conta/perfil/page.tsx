'use client'

import { useState } from 'react'
import { DashboardLayout } from '@/components/layout/DashboardLayout'

const inputClasses = (isEditing: boolean) => `
  w-full 
  px-3 
  py-2 
  rounded-lg 
  transition-colors 
  border
  focus:outline-none
  ${isEditing 
    ? 'bg-background-secondary/30 text-text-primary border-background-secondary focus:bg-background-card focus:border-accent-primary/20' 
    : 'bg-background-secondary/20 text-text-secondary border-background-secondary disabled:opacity-70'
  }
`

export default function PerfilPage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Meu Perfil</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              isEditing 
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-accent-primary hover:bg-accent-primary/90 text-white'
            }`}
          >
            {isEditing ? 'Salvar Alterações' : 'Editar Perfil'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Informações Pessoais */}
          <div className="lg:col-span-2 bg-background-card rounded-lg p-6 space-y-6">
            <div>
              <h2 className="text-lg font-medium mb-4">Informações Pessoais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    defaultValue="Dominik Kuhn"
                    disabled={!isEditing}
                    className={inputClasses(isEditing)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="dominik@example.com"
                    disabled={!isEditing}
                    className={inputClasses(isEditing)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    defaultValue="(11) 99999-9999"
                    disabled={!isEditing}
                    className={inputClasses(isEditing)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    CPF
                  </label>
                  <input
                    type="text"
                    defaultValue="123.456.789-00"
                    disabled
                    className="w-full px-3 py-2 rounded-lg bg-background-secondary/20 text-text-secondary border border-background-secondary opacity-70"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-medium mb-4">Endereço</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Endereço
                  </label>
                  <input
                    type="text"
                    defaultValue="Rua Example, 123"
                    disabled={!isEditing}
                    className={inputClasses(isEditing)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Cidade
                  </label>
                  <input
                    type="text"
                    defaultValue="São Paulo"
                    disabled={!isEditing}
                    className={inputClasses(isEditing)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1">
                    Estado
                  </label>
                  <input
                    type="text"
                    defaultValue="SP"
                    disabled={!isEditing}
                    className={inputClasses(isEditing)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Avatar e Preferências */}
          <div className="space-y-6">
            <div className="bg-background-card rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Foto do Perfil</h2>
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white text-4xl font-medium mb-4">
                  DK
                </div>
                {isEditing && (
                  <button className="px-4 py-2 text-sm font-medium rounded-lg bg-background-secondary hover:bg-background-secondary/70 transition-colors">
                    Alterar Foto
                  </button>
                )}
              </div>
            </div>

            <div className="bg-background-card rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Preferências</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Notificações por Email</span>
                  <button
                    className={`relative w-11 h-6 rounded-full transition-colors ${
                      isEditing ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'
                    } ${true ? 'bg-accent-primary' : 'bg-background-secondary'}`}
                    disabled={!isEditing}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        true ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Notificações Push</span>
                  <button
                    className={`relative w-11 h-6 rounded-full transition-colors ${
                      isEditing ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'
                    } ${true ? 'bg-accent-primary' : 'bg-background-secondary'}`}
                    disabled={!isEditing}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                        true ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
} 