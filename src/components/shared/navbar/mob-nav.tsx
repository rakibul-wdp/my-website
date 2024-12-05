'use client'

import { Logo } from '@/components/common'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { FC, useState } from 'react'
import { NavItems } from './nav-items'

export const MobNav: FC = () => {
  const [mobMenu, setMobMenu] = useState(false)

  return (
    <Sheet onOpenChange={() => setMobMenu((prv) => !prv)} open={mobMenu}>
      <SheetTrigger>
        <figure className="p-2">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </figure>
      </SheetTrigger>
      <SheetContent className="w-full px-0">
        <SheetHeader>
          <SheetTitle className="shadow-custom -mt-6 px-5">
            <Logo className="w-[46px] h-[46px]" />
          </SheetTitle>
          <div className="pt-[86px]">
            <NavItems />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
