'use client'

import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { Bot } from 'lucide-react'

interface RoboStatusCardProps {
  title: string
  subtitle: string
  count: number
  onStopAll?: () => void
}

export function RoboStatusCard({ title, subtitle, count, onStopAll }: RoboStatusCardProps) {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background-secondary/10">
            <Bot className="h-6 w-6 text-accent-primary" />
          </div>
          <div>
            <Typography.H4>{title}</Typography.H4>
            <Typography.Text className="text-text-secondary">
              {subtitle}
            </Typography.Text>
          </div>
        </div>

        <div className="text-center">
          <Typography.H2 className="text-accent-primary">{count}</Typography.H2>
        </div>

        {onStopAll && (
          <Button 
            variant="destructive" 
            className="w-full"
            onClick={onStopAll}
          >
            Parar todos os Robôs
          </Button>
        )}
      </div>
    </Card>
  )
}