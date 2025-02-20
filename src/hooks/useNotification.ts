import { toast } from 'react-hot-toast'

type NotificationType = 'success' | 'error' | 'info'

export function useNotification() {
  const notify = (message: string, type: NotificationType = 'info') => {
    const options = {
      duration: 3000,
      position: 'bottom-right' as const,
      style: {
        background: 'var(--background-card)',
        color: 'var(--text-primary)',
        border: '1px solid var(--background-secondary)'
      }
    }

    switch (type) {
      case 'success':
        toast.success(message, options)
        break
      case 'error':
        toast.error(message, options)
        break
      default:
        toast(message, options)
    }
  }

  return { notify }
} 