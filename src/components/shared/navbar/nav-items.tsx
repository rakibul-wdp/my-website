'use client'

import { P } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { useActivePath } from '@/hooks'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { homeNavItems } from './db'

export const NavItems: FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [clickedSection, setClickSection] = useState<string | null>(null)
  const pathname = usePathname()
  const isActive = useActivePath()

  useEffect(() => {
    if (pathname.length > 1) setClickSection(null)
  }, [pathname.length])

  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center lg:gap-[26px] xl:gap-8 2xl:gap-11">
      {homeNavItems.map(({ href, name, id }, i) => (
        <Link
          href={href}
          key={i}
          className={cn('relative w-full px-[25px] lg:px-0 lg:w-fit')}
          onClick={() => setClickSection(name)}
          onMouseEnter={() => setHoverIndex(id)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <P
            variant="P1"
            className={cn(
              'hidden lg:block',
              isActive(href) || hoverIndex === id || clickedSection === name
                ? 'underline underline-offset-[2.5px] decoration-2 decoration-primary border-primary'
                : '',
            )}
          >
            {name}
          </P>
          <Button
            variant={`${isActive(href) ? 'default' : 'outline'}`}
            size="default"
            className={cn('w-full border-none lg:hidden')}
          >
            <span
              className={`text-[22px] leading-[27.72px] ${isActive(href) ? 'text-white hover:text-black' : 'text-secondary'} font-semibold font-outfit`}
            >
              {name}
            </span>
          </Button>

          <hr
            className={cn(
              'lg:hidden absolute -bottom-[1px] mt-1 left-[25px] right-[25px] rounded-full bg-secondary',
              isActive(href) ||
                id === 4 ||
                (isActive('/tour') && id === 1) ||
                (isActive('/visa') && id === 2) ||
                (isActive('/blog') && id === 3)
                ? 'hidden'
                : 'block',
            )}
          />
        </Link>
      ))}
    </div>
  )
}
