'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNotification } from '@/hooks/useNotification'
import { Modal } from './Modal'

// Interface base para propriedades comuns
interface BaseCardProps {
  className?: string
}

// Interface para o Card básico
interface SimpleCardProps extends BaseCardProps, React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

// Interface para o Card com métricas
interface MetricCardProps extends BaseCardProps {
  title: string
  value: string
  change: {
    value: number
    trend: 'up' | 'down'
  }
  isLoading?: boolean
}

// Componente Card básico
export function Card({ children, className = '', ...props }: SimpleCardProps) {
  const { loading, ...restProps } = props as any

  return (
    <div 
      className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}
      {...restProps}
    >
      {children}
    </div>
  )
}

// Componente Card com métricas
export function MetricCard({ 
  title, 
  value, 
  change, 
  isLoading = false, 
  className = '' 
}: MetricCardProps) {
  const { notify } = useNotification()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    setIsModalOpen(true)
    notify(`Detalhes de ${title} expandidos`, 'info')
  }

  if (isLoading) {
    return (
      <div className="bg-background-card p-6 rounded-lg border border-background-secondary">
        <h3 className="text-sm font-medium text-text-secondary">{title}</h3>
        <div className="animate-pulse mt-2">
          <div className="h-8 bg-background-secondary/50 rounded w-24" />
          <div className="h-4 bg-background-secondary/50 rounded w-16 mt-2" />
        </div>
      </div>
    )
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.02 }}
        onClick={handleClick}
        className={`
          p-6 rounded-xl bg-background-card border border-background-secondary 
          hover:border-accent-primary/20 transition-all duration-300 cursor-pointer
          ${className}
        `}
      >
        <h3 className="text-text-secondary text-sm font-medium">{title}</h3>
        <p className="text-text-primary text-2xl font-bold mt-2">
          {value}
        </p>
        <div className="mt-2 flex items-center">
          {change.trend === 'up' ? (
            <span className="text-states-success flex items-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="ml-1 font-medium">{Math.abs(change.value)}%</span>
            </span>
          ) : (
            <span className="text-states-error flex items-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
              </svg>
              <span className="ml-1 font-medium">{Math.abs(change.value)}%</span>
            </span>
          )}
          <span className="text-text-secondary text-sm ml-2">vs. último mês</span>
        </div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
      >
        <div className="space-y-4">
          <div>
            <p className="text-text-secondary text-sm">Valor Atual</p>
            <p className="text-text-primary text-2xl font-bold">{value}</p>
          </div>
          
          <div>
            <p className="text-text-secondary text-sm">Variação</p>
            <div className="flex items-center">
              <span className={change.trend === 'up' ? 'text-states-success' : 'text-states-error'}>
                {change.trend === 'up' ? '↑' : '↓'}
                <span className="ml-1 font-medium">{Math.abs(change.value)}%</span>
              </span>
            </div>
          </div>

          <div className="pt-4 border-t border-background-secondary">
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full py-2 bg-background-secondary text-text-primary rounded-lg hover:bg-background-secondary/70 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
} 