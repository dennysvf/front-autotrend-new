import React from 'react'

export interface Column<T> {
  header: string
  accessor: keyof T
  cell?: (value: T[keyof T], item: T) => React.ReactNode
}

interface TableProps<T> {
  columns: Column<T>[]
  data: T[]
}

export function Table<T extends { id: string | number }>({ columns, data }: TableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-background-secondary">
            {columns.map((column) => (
              <th
                key={String(column.accessor)}
                className="text-left p-4 text-text-secondary font-medium"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-background-secondary hover:bg-background-secondary/50 transition-colors"
            >
              {columns.map((column) => (
                <td key={String(column.accessor)} className="p-4">
                  {column.cell
                    ? column.cell(item[column.accessor], item)
                    : String(item[column.accessor])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}