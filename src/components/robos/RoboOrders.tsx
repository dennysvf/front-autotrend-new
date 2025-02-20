'use client'

interface Order {
  ordem: string
  data: string
  ativo: string
  cv: 'C' | 'V'
  status: 'Executada' | 'Cancelada'
  tipo: string
  quantidade: number
  preco: number
  resultado?: {
    abs: number
    percentual: number
    valor: number
  }
}

const orders: Order[] = [
  {
    ordem: '87064523',
    data: '2025-02-19 09:11:50',
    ativo: 'WIN.J25',
    cv: 'V',
    status: 'Cancelada',
    tipo: 'Take (87064504)',
    quantidade: 0,
    preco: 130340.00,
  },
  {
    ordem: '87064536',
    data: '2025-02-19 09:13:45',
    ativo: 'WIN.J25',
    cv: 'V',
    status: 'Cancelada',
    tipo: 'Take (87064534)',
    quantidade: 0,
    preco: 130290.00,
  },
  // ... adicione mais ordens conforme necessário
]

export function RoboOrders() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <select className="px-3 py-1.5 text-sm rounded-md bg-background-secondary/50 border border-background-secondary">
            <option>Ativo</option>
            <option>WIN.J25</option>
          </select>
          <select className="px-3 py-1.5 text-sm rounded-md bg-background-secondary/50 border border-background-secondary">
            <option>C/V</option>
            <option>Compra</option>
            <option>Venda</option>
          </select>
          <select className="px-3 py-1.5 text-sm rounded-md bg-background-secondary/50 border border-background-secondary">
            <option>Status</option>
            <option>Executada</option>
            <option>Cancelada</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-accent-primary text-white">
            Gerar XLS
          </button>
          <button className="px-3 py-1.5 text-sm font-medium rounded-md bg-accent-primary text-white">
            Gerar CSV
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-background-secondary">
              <th className="pb-3 font-medium text-text-secondary">Ordem</th>
              <th className="pb-3 font-medium text-text-secondary">Data/Hora</th>
              <th className="pb-3 font-medium text-text-secondary">Ativo</th>
              <th className="pb-3 font-medium text-text-secondary">C/V</th>
              <th className="pb-3 font-medium text-text-secondary">Status</th>
              <th className="pb-3 font-medium text-text-secondary">Tipo</th>
              <th className="pb-3 font-medium text-text-secondary">Quantidade</th>
              <th className="pb-3 font-medium text-text-secondary text-right">Preço</th>
              <th className="pb-3 font-medium text-text-secondary text-right">Resultado</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.ordem} className="border-b border-background-secondary/50">
                <td className="py-3">{order.ordem}</td>
                <td className="py-3">{new Date(order.data).toLocaleString('pt-BR')}</td>
                <td className="py-3">{order.ativo}</td>
                <td className="py-3">{order.cv}</td>
                <td className="py-3">
                  <span className={`px-2 py-0.5 rounded-full text-xs ${
                    order.status === 'Executada' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3">{order.tipo}</td>
                <td className="py-3">{order.quantidade}</td>
                <td className="py-3 text-right">{order.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                <td className="py-3 text-right">
                  {order.resultado && (
                    <div className="flex flex-col items-end">
                      <span className={order.resultado.valor >= 0 ? 'text-green-500' : 'text-red-500'}>
                        R$ {order.resultado.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                      <span className="text-xs text-text-secondary">
                        {order.resultado.percentual}%
                      </span>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 