import { createContext, useContext, useMemo, useState } from 'react'
import type { ProductCategory } from '../types'

export type SortOrder = 'name-asc' | 'price-asc' | 'price-desc'

interface FilterContextValue {
  category: ProductCategory | 'all'
  search: string
  sort: SortOrder
  styleTags: string[]
  setCategory: (value: ProductCategory | 'all') => void
  setSearch: (value: string) => void
  setSort: (value: SortOrder) => void
  toggleStyleTag: (value: string) => void
  clearFilters: () => void
}

const FilterContext = createContext<FilterContextValue | undefined>(undefined)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState<ProductCategory | 'all'>('all')
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState<SortOrder>('name-asc')
  const [styleTags, setStyleTags] = useState<string[]>([])

  const value = useMemo(
    () => ({
      category,
      search,
      sort,
      styleTags,
      setCategory,
      setSearch,
      setSort,
      toggleStyleTag: (value: string) => {
        setStyleTags((current) =>
          current.includes(value)
            ? current.filter((tag) => tag !== value)
            : [...current, value],
        )
      },
      clearFilters: () => {
        setCategory('all')
        setSearch('')
        setSort('name-asc')
        setStyleTags([])
      },
    }),
    [category, search, sort, styleTags],
  )

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  )
}

export const useFilters = () => {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error('useFilters must be used within FilterProvider')
  }

  return context
}
