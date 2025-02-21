'use client'

import { PlanCard } from './PlanCard'

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

interface PlanGridProps {
  plans: Plan[]
  currentPlan: string
  yearlyBilling: boolean
  onSelectPlan: (id: string) => void
}

export function PlanGrid({ plans, currentPlan, yearlyBilling, onSelectPlan }: PlanGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <PlanCard
          key={plan.id}
          {...plan}
          isCurrentPlan={currentPlan === plan.id}
          yearlyBilling={yearlyBilling}
          onSelect={onSelectPlan}
        />
      ))}
    </div>
  )
}