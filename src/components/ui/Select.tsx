'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  value: string
  onValueChange: (value: string) => void
  options: SelectOption[]
  className?: string
  placeholder?: string
}

export function Select({
  value,
  onValueChange,
  options,
  className = '',
  placeholder = 'Selecione...'
}: SelectProps) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger
        className={`
          inline-flex items-center justify-between rounded-lg px-3 py-2 text-sm
          border border-gray-200 bg-white hover:bg-gray-50
          focus:outline-none focus:ring-2 focus:ring-primary/20
          disabled:cursor-not-allowed disabled:opacity-50
          ${className}
        `}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className="
            z-50 min-w-[8rem] overflow-hidden rounded-lg border border-gray-200
            bg-white shadow-md animate-in fade-in-80
          "
        >
          <SelectPrimitive.Viewport className="p-1">
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                className="
                  relative flex cursor-pointer select-none items-center rounded-md px-8 py-2
                  text-sm outline-none hover:bg-gray-100
                  data-[disabled]:pointer-events-none data-[disabled]:opacity-50
                "
              >
                <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
} 