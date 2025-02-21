'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg",
        "bg-background-card",
        "border border-border-primary",
        "shadow-lg shadow-background-secondary/5",
        "transition-all duration-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}