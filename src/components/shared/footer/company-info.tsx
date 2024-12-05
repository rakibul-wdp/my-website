'use client'

import { Logo } from '@/components/common'
import { P } from '@/components/typography'
import { FC } from 'react'

export const CompanyInfo: FC = () => {
  return (
    <div className="flex flex-col items-center lg:items-start justify-start gap-1 md:gap-[2px]">
      <Logo />
      <P variant="P1" className="lg:w-[70%] 1320px:min-w-[250px] text-center lg:text-start">
        We make your dream more beautiful & enjoyable.
      </P>
    </div>
  )
}
