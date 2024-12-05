'use client'

import { format } from 'date-fns'

import { P } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC, useState } from 'react'

export const DateInput: FC = () => {
  const [date, setDate] = useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          size="filterSearch"
          className={cn(
            'w-full bg-white lg:bg-transparent items-center justify-center py-0 gap-[11px]',
            'border border-s-[#00000033] border-e-[#00000033] border-y-[#00000033]',
            !date && 'text-muted-foreground',
          )}
        >
          <Image
            src="/icons/select-date.svg"
            width={20}
            height={20}
            alt="location"
            className="lg:hidden ml-[27px]"
          />
          <span
            className={cn(
              'w-full flex flex-col items-start justify-between lg:gap-y-[6px] py-[9px] px-[21px]',
              'lg:py-[5px] min-[1180px]:py-3 lg:px-[10px] min-[1180px]:px-[21px]',
            )}
          >
            <P variant="P1" className="text-secondary">
              Check-in & Check-out
            </P>
            <P variant="P1" className="font-bold">
              {date ? (
                format(date, 'PPP')
              ) : (
                <span className="font-bold text-black">Pick a date</span>
              )}
            </P>
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  )
}
