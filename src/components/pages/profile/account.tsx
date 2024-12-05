import { P, SubTitle, Title } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { TabsContent } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'

export interface IAccounts {
  id: number
  label: string
  title: string
}

export const accounts: IAccounts[] = [
  {
    id: 1,
    label: 'Name',
    title: 'Ann Pine',
  },
  {
    id: 2,
    label: 'Email',
    title: 'ann.pine@gmail.com',
  },
  {
    id: 3,
    label: 'Password',
    title: '•••••••••••••••••',
  },
  {
    id: 4,
    label: 'Phone number',
    title: '+233 034 3456 578',
  },
  {
    id: 5,
    label: 'Address',
    title: 'PR 12 East Legon, Accra, Ghana',
  },
  {
    id: 6,
    label: 'Date of birth',
    title: '02-24-1996',
  },
]

export const Account: FC = () => {
  return (
    <TabsContent value="account" className="w-full">
      <Title variant="H3" className="mb-[23px] md:mb-[27px]">
        Account
      </Title>
      <div
        className={cn(
          'mt-0 bg-[#F7F8FA] border border-secondary/5 rounded md:rounded-[10px] p-[18px] md:p-[30px] pb-9 md:pb-[57px]',
          'w-full flex flex-col items-center justify-between gap-[10.5px] md:gap-[38px]',
        )}
      >
        {accounts.map(({ id, label, title }) => (
          <div
            className={cn(
              'relative w-full flex items-center justify-between',
              id !== 6 &&
                'after:content-[""] after:absolute after:left-0 after:right-0 after:bottom-0 after:border-b after:border-secondary/30 after:-mx-[18px] pb-[10.5px] md:after:hidden',
            )}
            key={id}
          >
            <div className="flex flex-col items-start justify-center gap-[1px] md:gap-2">
              <P variant="P1">{label}</P>
              <SubTitle variant="H4">{title}</SubTitle>
            </div>
            <Button variant="outline" size="default">
              <Image src="/icons/edit.svg" width={20} height={20} alt="edit" />
              <P variant="P1" className="font-medium text-primary">
                Edit
              </P>
            </Button>
          </div>
        ))}
      </div>
    </TabsContent>
  )
}
