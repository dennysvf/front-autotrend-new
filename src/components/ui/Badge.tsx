'use client'

import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'success'
}

export function Badge({ 
  variant = 'default', 
  className, 
  ...props 
}: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        {
          'bg-accent-primary text-white': variant === 'default',
          'border border-current': variant === 'outline',
          'bg-accent-secondary/10 text-accent-secondary': variant === 'success'
        },
        className
      )}
      {...props}
    />
  )
}