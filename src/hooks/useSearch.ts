'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export function useSearch() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '')
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        setIsSearching(true)
        const params = new URLSearchParams(searchParams)
        params.set('q', searchTerm)
        router.push(`${pathname}?${params.toString()}`)
      } else {
        const params = new URLSearchParams(searchParams)
        params.delete('q')
        router.push(`${pathname}?${params.toString()}`)
      }
      setIsSearching(false)
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm, router, pathname, searchParams])

  return { searchTerm, setSearchTerm, isSearching }
} 