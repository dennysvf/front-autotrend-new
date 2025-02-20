'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Breadcrumbs() {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(Boolean)

  if (paths.length === 0) return null

  return (
    <div className="flex items-center gap-2 text-sm mb-6">
      <Link href="/" className="text-text-secondary hover:text-text-primary transition-colors">
        Home
      </Link>
      {paths.map((path, i) => (
        <div key={path} className="flex items-center gap-2">
          <span className="text-text-secondary">/</span>
          <Link
            href={`/${paths.slice(0, i + 1).join('/')}`}
            className={`${
              i === paths.length - 1
                ? 'text-accent-primary'
                : 'text-text-secondary hover:text-text-primary'
            } transition-colors capitalize`}
          >
            {path}
          </Link>
        </div>
      ))}
    </div>
  )
} 