'use client'

import { P, Title } from '@/components/typography'
import { TabsContent } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC, useState } from 'react'
import { AddCard } from './add-card'

export const PaymentMethod: FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <TabsContent value="payment-method" className="w-full">
      <Title variant="H3" className="mb-[23px] md:mb-[27px]">
        Payment Method
      </Title>
      <div
        className={cn(
          'mt-0 bg-[#F7F8FA] border border-secondary/5 rounded md:rounded-[10px] pt-[15px] md:pt-[39px] px-[21px] md:px-[30px] pb-[34px] md:pb-[86px]',
          'w-full flex flex-col lg:flex-row items-center justify-start gap-[25px] md:gap-[37px]',
        )}
      >
        <Image src="/images/visa-card.png" width={378} height={212} alt="visa card" />

        <div
          className="py-[55px] md:py-[60px] px-[132px] md:px-[140px] border-2 border-dashed border-primary rounded-2xl flex flex-col items-center justify-center gap-[10px] cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Image src="/icons/add-icon.svg" width={64} height={64} alt="add icon" />
          <P variant="P3" className="text-primary">
            Add a new card
          </P>
        </div>
      </div>

      {open && <AddCard open={open} setOpen={setOpen} />}
    </TabsContent>
  )
}
