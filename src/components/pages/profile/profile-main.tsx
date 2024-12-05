'use client'

import { Container } from '@/components/common'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { Account } from './account'
import { History } from './history'
import { PaymentMethod } from './payment-method'

export interface ITabLists {
  id: number
  tab: string
  value: string
}

export const tabLists: ITabLists[] = [
  {
    id: 1,
    tab: 'Account',
    value: 'account',
  },
  {
    id: 2,
    tab: 'History',
    value: 'history',
  },
  {
    id: 3,
    tab: 'Payment Method',
    value: 'payment-method',
  },
]

export const ProfileMain: FC = () => {
  const router = useRouter()

  return (
    <Container>
      <Tabs defaultValue="account" className="w-full mb-8 md:mb-[100px]">
        <TabsList className="w-full justify-start gap-[90px] md:gap-[103px] bg-transparent p-0 h-fit border-b rounded-none mb-[18px] md:mb-[33px]">
          {tabLists.map(({ id, tab, value }) => (
            <TabsTrigger
              key={id}
              value={value}
              className="data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-primary data-[state=active]:rounded-none font-semibold text-base font-outfit p-0 pb-[3px] lg:pb-3"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-7 lg:gap-[35px]">
          <Account />
          <History />
          <PaymentMethod />
        </div>
      </Tabs>
    </Container>
  )
}
