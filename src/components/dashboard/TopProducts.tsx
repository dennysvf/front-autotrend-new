'use client'
import React from 'react'
import { Table } from '@/components/ui/Table'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { Column } from '@/components/ui/Table'

interface Product {
  id: string
  name: string
  price: number
  quantity: number
  total: number
}

const products: Product[] = [
  {
    id: '1',
    name: 'ASOS Ridley High Waist',
    price: 79.49,
    quantity: 82,
    total: 6518.18
  },
  {
    id: '2',
    name: 'Nike Air Max 270',
    price: 249.99,
    quantity: 54,
    total: 13499.46
  },
  {
    id: '3',
    name: 'Apple Watch Series 7',
    price: 399.99,
    quantity: 32,
    total: 12799.68
  },
  {
    id: '4',
    name: 'Samsung Galaxy S22',
    price: 899.99,
    quantity: 24,
    total: 21599.76
  },
  {
    id: '5',
    name: 'Sony WH-1000XM4',
    price: 349.99,
    quantity: 42,
    total: 14699.58
  }
]

const columns: Column<Product>[] = [
  {
    header: 'Produto',
    accessor: 'name',
  },
  {
    header: 'Preço',
    accessor: 'price',
    cell: (value: string | number) => `R$ ${Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
  },
  {
    header: 'Quantidade',
    accessor: 'quantity',
  },
  {
    header: 'Total',
    accessor: 'total',
    cell: (value: string | number) => `R$ ${Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`
  }
]

export function TopProducts() {
  return (
    <div className="bg-background-card rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Produtos Mais Vendidos</h3>
        <button className="text-sm text-accent-primary hover:text-accent-secondary transition-colors">
          Ver todos
        </button>
      </div>
      <Table columns={columns} data={products} />
    </div>
  )
}