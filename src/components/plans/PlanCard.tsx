'use client'

import { Check } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { cn } from '@/lib/utils'

interface PlanFeature {
  title: string
  included: boolean
}

interface PlanCardProps {
  id: string
  name: string
  price: number
  period: string
  description: string
  features: PlanFeature[]
  recommended?: boolean
  isCurrentPlan?: boolean
  yearlyBilling?: boolean
  onSelect: (id: string) => void
}

export function PlanCard({
  id,
  name,
  price,
  period,
  description,
  features,
  recommended,
  isCurrentPlan,
  yearlyBilling,
  onSelect
}: PlanCardProps) {
  const finalPrice = yearlyBilling ? price * 0.8 : price

  return (
    <Card className={cn(
      "relative",
      "transition-all duration-300",
      recommended && "border-accent-primary shadow-lg shadow-accent-primary/5 scale-105"
    )}>
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-primary text-white text-sm font-medium rounded-full">
          Recomendado
        </div>
      )}

      <div className="p-6 space-y-4">
        <div className="text-center">
          <Typography.H3>{name}</Typography.H3>
          <Typography.Text className="text-text-secondary">{description}</Typography.Text>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center">
            <Typography.Text className="text-3xl font-bold">R$</Typography.Text>
            <Typography.Text className="text-5xl font-bold">
              {finalPrice.toFixed(2)}
            </Typography.Text>
          </div>
          <Typography.Text className="text-text-secondary">/{period}</Typography.Text>
        </div>

        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={cn(
                "flex-shrink-0 rounded-full p-1",
                feature.included ? "text-states-success" : "text-text-secondary"
              )}>
                <Check size={16} />
              </div>
              <Typography.Text className={feature.included ? "text-text-primary" : "text-text-secondary"}>
                {feature.title}
              </Typography.Text>
            </div>
          ))}
        </div>

        <Button
          onClick={() => onSelect(id)}
          variant={isCurrentPlan ? "default" : "secondary"}
          className="w-full"
        >
          {isCurrentPlan ? 'Plano Atual' : 'Selecionar Plano'}
        </Button>
      </div>
    </Card>
  )
}