'use client'

import { P } from '@/components/typography'
import { FormControl } from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import { FC, useState } from 'react'

type IIDInput = { label: string; tooltip: string; details: string; icon: string }

export const IDInput: FC<IIDInput> = ({ label, tooltip, details, icon }) => {
  const [count, setCount] = useState(1)

  const increment = () => setCount((prev) => Math.min(prev + 1, 10))
  const decrement = () => setCount((prev) => Math.max(prev - 1, 1))
  return (
    <FormControl>
      <div className="w-full bg-white lg:bg-transparent flex items-center justify-start gap-[11px] border rounded-md border-[#00000033]">
        <Image src={icon} width={20} height={20} alt="location" className="lg:hidden ml-[27px]" />

        <div
          className={cn(
            'flex flex-col items-start justify-between lg:gap-y-[0.2px] py-[9px] px-[21px]',
            'lg:py-[5px] min-[1180px]:py-3 lg:px-[10px] min-[1180px]:px-[21px]',
          )}
        >
          <P variant="P1" className="text-secondary">
            {label}{' '}
            <span className="text-[12px] lg:text-[10px] min-[1060px]:text-[12px]">{tooltip}</span>
          </P>
          <div className="flex items-center justify-start">
            <button
              onClick={decrement}
              className="bg-white rounded disabled:opacity-50 shadow"
              disabled={count === 1}
            >
              <Minus />
            </button>
            <P variant="P1" className="font-bold px-2">
              {count} {count !== 1 ? details + 's' : details}
            </P>
            <button
              onClick={increment}
              className="bg-white rounded disabled:opacity-50 shadow"
              disabled={count === 10}
            >
              <Plus />
            </button>
          </div>
        </div>
      </div>
    </FormControl>
  )
}
