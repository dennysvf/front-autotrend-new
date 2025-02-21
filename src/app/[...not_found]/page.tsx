'use client'

import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { UnderDevelopment } from '@/components/shared/UnderDevelopment'

export default function CatchAllPage() {
  return (
    <DashboardLayout>
      <UnderDevelopment />
    </DashboardLayout>
  )
}