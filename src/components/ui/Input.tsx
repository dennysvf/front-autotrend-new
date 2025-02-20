import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export function Input({ className = '', error, ...props }: InputProps) {
  return (
    <div>
      <input
        className={`w-full px-4 py-2 rounded-lg border border-gray-200 
          focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-red-500' : ''}
          ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
} 