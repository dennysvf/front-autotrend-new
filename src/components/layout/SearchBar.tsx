'use client'

import { useSearch } from '@/providers/SearchProvider'
import { SearchResults } from './SearchResults'

export function SearchBar() {
  const { searchTerm, setSearchTerm, isSearching } = useSearch()

  return (
    <div className="relative flex-1 max-w-lg">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar robôs, estratégias..."
        className="w-full px-4 py-2 pl-10 rounded-lg 
          bg-background border border-background-secondary
          focus:border-accent-primary/20 
          text-text-primary placeholder:text-text-secondary
          focus:outline-none transition-all"
      />
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">
        {isSearching ? (
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        )}
      </div>
      {searchTerm && (
        <button
          onClick={() => setSearchTerm('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      <SearchResults />
    </div>
  )
}