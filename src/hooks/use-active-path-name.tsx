'use client'

import { usePathname } from 'next/navigation'

export const useActivePath = () => {
  const pathname = usePathname()

  const isActive = (link: string) =>
    (pathname === '/' && link === '/') ||
    (pathname.split('/')[1] && link !== '/' && pathname.split('/')[1].includes(link.split('/')[1]))

  return isActive
}
