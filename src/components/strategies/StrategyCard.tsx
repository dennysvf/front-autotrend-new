'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Bot } from 'lucide-react'
import { Typography } from '@/components/ui/Typography'
import { Separator } from '@/components/ui/Separator'
import { cn } from '@/lib/utils'

interface StrategyCardProps {
  name: string
  partner: string
  graph: string
  category: string
  type: string
  details: string
  isFree?: boolean
}

export function StrategyCard({
  name,
  partner,
  graph,
  category,
  type,
  details,
  isFree
}: StrategyCardProps) {
  return (
    <Link href="/account/strategies" className="block">
      <Card className={cn(
        "p-6",
        "transition-all duration-200",
        "hover:border-accent-primary/20",
        "hover:bg-background-secondary/5",
        "focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:outline-none"
      )}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background-secondary/10">
              <Bot className="h-6 w-6 text-accent-primary" />
            </div>
            <div>
              <Typography.H4 className="text-text-primary">{name}</Typography.H4>
              <Typography.Text className="text-text-secondary">
                Parceiro: {partner}
              </Typography.Text>
            </div>
          </div>
          {isFree && (
            <Badge variant="outline" className="border-accent-secondary text-accent-secondary">
              Grátis
            </Badge>
          )}
        </div>

        <Separator className="my-4" />

        <div className="space-y-2">
          {[
            { label: 'Gráfico', value: graph },
            { label: 'Categoria', value: category },
            { label: 'Tipo', value: type },
            { label: 'Detalhes', value: details }
          ].map(({ label, value }) => (
            <div key={label} className="flex justify-between">
              <Typography.Text className="text-text-secondary">{label}:</Typography.Text>
              <Typography.Text className="text-text-primary">{value}</Typography.Text>
            </div>
          ))}
        </div>
      </Card>
    </Link>
  )
}