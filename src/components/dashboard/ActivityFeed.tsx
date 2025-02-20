import React from 'react'

interface Activity {
  id: string
  type: 'sale' | 'refund' | 'signup' | 'login'
  user: string
  timestamp: string
  details: string
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'sale',
    user: 'João Silva',
    timestamp: '2 minutos atrás',
    details: 'comprou Apple Watch Series 7'
  },
  {
    id: '2',
    type: 'refund',
    user: 'Maria Santos',
    timestamp: '5 minutos atrás',
    details: 'solicitou reembolso de Nike Air Max 270'
  },
  {
    id: '3',
    type: 'signup',
    user: 'Pedro Oliveira',
    timestamp: '1 hora atrás',
    details: 'criou uma nova conta'
  },
  {
    id: '4',
    type: 'login',
    user: 'Ana Costa',
    timestamp: '2 horas atrás',
    details: 'fez login no sistema'
  },
  {
    id: '5',
    type: 'sale',
    user: 'Carlos Ferreira',
    timestamp: '3 horas atrás',
    details: 'comprou Samsung Galaxy S22'
  }
]

function ActivityIcon({ type }: { type: Activity['type'] }) {
  const icons = {
    sale: '💰',
    refund: '↩️',
    signup: '👤',
    login: '🔑'
  }

  return (
    <div className="w-8 h-8 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary">
      {icons[type]}
    </div>
  )
}

function ActivityItem({ activity }: { activity: Activity }) {
  return (
    <div className="flex gap-4 p-4 hover:bg-background-secondary rounded-lg transition-colors">
      <ActivityIcon type={activity.type} />
      <div className="flex-1">
        <p className="text-sm">
          <span className="font-medium">{activity.user}</span>{' '}
          <span className="text-text-secondary">{activity.details}</span>
        </p>
        <p className="text-xs text-text-secondary mt-1">{activity.timestamp}</p>
      </div>
    </div>
  )
}

export function ActivityFeed() {
  return (
    <div className="bg-background-card rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Atividades Recentes</h3>
        <button className="text-sm text-accent-primary hover:text-accent-secondary transition-colors">
          Ver todas
        </button>
      </div>
      <div className="space-y-2">
        {activities.map(activity => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  )
} 