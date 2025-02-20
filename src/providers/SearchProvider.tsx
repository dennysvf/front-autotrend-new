'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { useDebounce } from '@/hooks/useDebounce'

interface SearchContextType {
  searchTerm: string
  setSearchTerm: (term: string) => void
  isSearching: boolean
  searchResults: any[]
  handleSearch: (term: string) => void
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  // Simular uma busca
  const handleSearch = useCallback(async (term: string) => {
    if (!term) {
      setSearchResults([])
      return
    }

    setIsSearching(true)
    try {
      // Aqui você faria a chamada real à API
      // Simulando uma busca com delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const results = [
        { id: 1, name: 'Robô 1', strategy: 'Estratégia A' },
        { id: 2, name: 'Robô 2', strategy: 'Estratégia B' },
        { id: 3, name: 'Robô 3', strategy: 'Estratégia C' },
      ].filter(item => 
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.strategy.toLowerCase().includes(term.toLowerCase())
      )
      
      setSearchResults(results)
    } catch (error) {
      console.error('Erro na busca:', error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }, [])

  // Executar a busca quando o termo mudar
  React.useEffect(() => {
    handleSearch(debouncedSearchTerm)
  }, [debouncedSearchTerm, handleSearch])

  const value = {
    searchTerm,
    setSearchTerm,
    isSearching,
    searchResults,
    handleSearch
  }

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider')
  }
  return context
} 