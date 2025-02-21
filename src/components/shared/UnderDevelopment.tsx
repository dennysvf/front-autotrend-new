'use client'

import { Construction } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Typography } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'

export function UnderDevelopment() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <Card className="p-8 max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <Construction className="h-16 w-16 text-accent-primary" />
        </div>
        
        <div className="space-y-2">
          <Typography.H2>Em Desenvolvimento</Typography.H2>
          <Typography.Text className="text-text-secondary">
            Esta funcionalidade está sendo implementada e estará disponível em breve.
          </Typography.Text>
        </div>

        <Button
          variant="outline"
          onClick={() => router.back()}
        >
          Voltar
        </Button>
      </Card>
    </div>
  )
}