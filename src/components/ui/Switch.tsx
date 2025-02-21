'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  defaultChecked?: boolean; // Add this line
  size?: 'sm' | 'md',
  onCheckedChange?: (checked: boolean) => void; // Add this line
  className?: string
}

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className = '', size = 'md', ...props }, ref) => {
  const sizeClasses = {
    sm: 'h-4 w-8',
    md: 'h-6 w-11'
  }

  const thumbSizeClasses = {
    sm: 'h-3 w-3',
    md: 'h-5 w-5'
  }

  return (
    <SwitchPrimitives.Root
      className={`
        peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent
        transition-colors focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-primary focus-visible:ring-offset-2
        disabled:cursor-not-allowed disabled:opacity-50
        data-[state=checked]:bg-primary data-[state=unchecked]:bg-gray-200
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={`
          pointer-events-none block rounded-full bg-white shadow-lg ring-0
          transition-transform data-[state=checked]:translate-x-5
          data-[state=unchecked]:translate-x-0
          ${thumbSizeClasses[size]}
        `}
      />
    </SwitchPrimitives.Root>
  )
})