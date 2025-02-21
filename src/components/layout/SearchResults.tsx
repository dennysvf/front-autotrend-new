'use client'

import { useSearch } from '@/providers/SearchProvider'
import { useEffect, useRef } from 'react'

export function SearchResults() {
  const { searchTerm, searchResults, isSearching } = useSearch()
  const resultsRef = useRef<HTMLDivElement>(null)

  // Fechar ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (resultsRef.current && !resultsRef.current.contains(event.target as Node)) {
        // Fechar resultados
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (!searchTerm) return null

  return (
    <div
      ref={resultsRef}
      className="absolute top-full left-0 right-0 mt-2 bg-background rounded-lg shadow-lg border border-background-secondary overflow-hidden z-50"
    >
      {isSearching ? (
        <div className="p-4 text-center">
          <div className="inline-block w-6 h-6 border-2 border-accent-primary border-t-transparent rounded-full animate-spin" />
          <p className="mt-2 text-sm text-text-secondary">Buscando...</p>
        </div>
      ) : searchResults.length > 0 ? (
        <div className="divide-y divide-background-secondary">
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="p-3 hover:bg-background-secondary/50 cursor-pointer transition-colors"
            >
              <p className="font-medium text-text-primary">{result.name}</p>
              <p className="text-sm text-text-secondary">{result.strategy}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-4 text-center text-text-secondary">
          Nenhum resultado encontrado para "{searchTerm}"
        </div>
      )}
    </div>
  )
}