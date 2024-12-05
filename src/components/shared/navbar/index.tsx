'use client'

import { Logo } from '@/components/common'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { LoginButton } from './login-btn'
import { MobNav } from './mob-nav'
import { NavItems } from './nav-items'

export const Navbar: FC = () => {
  const [active, setActive] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined') setActive(window.scrollY > 0 ? true : false)
  }, [])

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => setActive(window.scrollY > 0 ? true : false))
  }

  return (
    <div
      className={cn(
        'flex w-screen items-center justify-center px-5 md:px-20',
        'bg-transparent transition-all duration-100 top-0 z-50',
        active && 'bg-white shadow',
        pathname === '/signup' || pathname === '/login' ? '' : 'fixed',
      )}
    >
      <nav
        className={cn(
          '1700px:max-w-screen-1700px mx-auto flex w-full items-center justify-between transition-all duration-100',
          active && '',
        )}
      >
        <Logo className="h-auto w-[46px] md:w-[98px]" />

        <div className="flex items-center justify-center gap-1 md:gap-5">
          <div className="hidden lg:block mr-4">
            <NavItems />
          </div>

          <Select>
            <SelectTrigger
              className={cn(
                'bg-[#D9D9D980] h-0 w-fit gap-x-5 rounded-md px-6 lg:px-[54px] py-[14.5px] md:py-[17px] lg:py-[27px]',
                'text-secondary font-outfit font-medium text-[12px] leading-[15.12px] md:text-[16px] md:leading-[20.16px]',
              )}
            >
              <SelectValue placeholder="LKR" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="ghost"
            size="icon"
            className="text-secondary font-outfit font-medium text-[12px] leading-[15.12px] md:text-[16px] md:leading-[20.16px] py-[6px] lg:pt-[14px] lg:pb-3 px-[7px] lg:px-[14px]"
          >
            <Image
              src="/icons/lkr-flag.svg"
              width="30"
              height="30"
              alt="LKR Flag"
              className="w-5 lg:w-[30px] h-[18.57px] lg:h-[30px]"
            />
          </Button>

          <div>
            <LoginButton />
          </div>

          <div className="block lg:hidden">
            <MobNav />
          </div>
        </div>
      </nav>
    </div>
  )
}
