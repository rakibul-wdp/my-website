'use client'

import { Container } from '@/components/common'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { CouponCard } from './coupon-card'
import { Itinerary } from './itinerary'
import { Policies } from './policies'
import { Summary } from './summary'

export interface ITabLists {
  id: number
  tab: string
  value: string
}

export const tabLists: ITabLists[] = [
  {
    id: 1,
    tab: 'Itinerary',
    value: 'itinerary',
  },
  {
    id: 2,
    tab: 'Policies',
    value: 'policies',
  },
  {
    id: 3,
    tab: 'Summary',
    value: 'summary',
  },
]

export const TourDetailsMain: FC = () => {
  const [currentValue, setCurrentValue] = useState('itinerary')
  const router = useRouter()

  const getValue = (value: string) => {
    console.log(value)
  }

  return (
    <Container>
      <Tabs defaultValue="itinerary" className="w-full mb-8 md:mb-[120px]">
        <TabsList className="w-full justify-start gap-[90px] md:gap-[103px] bg-transparent p-0 h-fit border-b rounded-none mb-4 md:mb-14">
          {tabLists.map(({ id, tab, value }) => (
            <TabsTrigger
              key={id}
              value={value}
              onClick={() => setCurrentValue(value)}
              className="data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-primary data-[state=active]:rounded-none font-semibold text-base font-outfit p-0 pb-[3px] lg:pb-3"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <div
          className={cn(
            'flex flex-col justify-between gap-7 lg:gap-[35px]',
            currentValue === 'itinerary'
              ? 'xl:flex-row items-center xl:items-start'
              : 'lg:flex-row items-start',
          )}
        >
          <Itinerary />
          <Policies />
          <Summary />
          <CouponCard currentValue={currentValue} />
        </div>
      </Tabs>
    </Container>
  )
}
