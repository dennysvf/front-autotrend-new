'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const typographyVariants = cva('text-text-primary', {
  variants: {
    variant: {
      h1: 'text-3xl font-bold',
      h2: 'text-2xl font-semibold',
      h3: 'text-xl font-medium',
      h4: 'text-lg font-medium',
      text: 'text-sm',
      secondary: 'text-sm text-text-secondary'
    }
  },
  defaultVariants: {
    variant: 'text'
  }
})

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean
}

function H1({ className, ...props }: TypographyProps) {
  return <h1 className={cn(typographyVariants({ variant: 'h1' }), className)} {...props} />
}

function H2({ className, ...props }: TypographyProps) {
  return <h2 className={cn(typographyVariants({ variant: 'h2' }), className)} {...props} />
}

function H3({ className, ...props }: TypographyProps) {
  return <h3 className={cn(typographyVariants({ variant: 'h3' }), className)} {...props} />
}

function H4({ className, ...props }: TypographyProps) {
  return <h4 className={cn(typographyVariants({ variant: 'h4' }), className)} {...props} />
}

function Text({ className, ...props }: TypographyProps) {
  return <p className={cn(typographyVariants({ variant: 'text' }), className)} {...props} />
}

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  Text
}