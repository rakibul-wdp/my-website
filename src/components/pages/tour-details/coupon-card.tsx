'use client'

import { P, SubTitle } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { FC, useState } from 'react'
import { ChooseHotel } from './choose-hotel'

export const CouponCard: FC<{ currentValue: string }> = ({ currentValue }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={cn('w-full', currentValue === 'itinerary' ? 'xl:w-fit' : 'lg:w-fit')}>
      <div className="pb-[13px] lg:pb-[19px] p-[19px] flex flex-col items-center lg:items-start justify-center bg-card-BG-Color-2/50 border border-card-BG-Color-2/40 rounded-sm mb-[17px] lg:mb-5">
        <SubTitle variant="H4">$ 4500.0/Person</SubTitle>
        <P variant="P1" className="text-secondary mt-[6px] lg:mt-[2px] mb-2 lg:mb-[25px]">
          Excluding Applicable Taxes
        </P>
        <Button
          variant="default"
          size="default"
          className={cn('w-full')}
          onClick={() => setOpen(true)}
        >
          Proceed To Payment
        </Button>
      </div>
      <div className="pb-[13px] lg:pb-[19px] p-[19px] flex flex-col items-start justify-center bg-card-BG-Color-2/50 border border-dotted border-card-BG-Color-2/40 rounded-sm mb-[17px] lg:mb-5">
        <SubTitle variant="H4" className="lg:mb-[6px]">
          Coupons & Offers
        </SubTitle>
        <P variant="P1" className="text-secondary">
          No cost EMI @*34,178
        </P>
        <P variant="P1" className="mt-1 mb-[6px] lg:my-[2px]">
          Book your holidays with Easy <span className="text-primary">EMI options.</span>
        </P>
        <div className="w-full flex items-center justify-between">
          <P variant="P1" className="text-secondary">
            Have a Coupon Code?
          </P>
          <P variant="P1" className="text-primary">
            Enter Code
          </P>
        </div>

        <div className="w-full p-[10px] border border-primary/80 rounded-md mt-[10px] lg:mt-[11px] mb-[11px] lg:mb-[13px]">
          <div className="flex items-center justify-between">
            <P variant="P1" className="text-sm font-bold">
              Airdrop
            </P>
            <P variant="P1" className="text-sm font-bold">
              $35,832
            </P>
          </div>
          <P variant="P1" className="mb-[2px] mt-[3.5px] text-secondary">
            Have a Coupon Code?
          </P>
          <div className="flex items-center justify-between">
            <P variant="P1" className="text-secondary">
              Exclusive Savings for flight inclusive packages!
            </P>
            <P variant="P1" className="text-primary">
              Remove
            </P>
          </div>
        </div>

        <div className="w-full bg-white p-[10px] border border-secondary/30 rounded-md">
          <div className="flex items-center justify-between">
            <P variant="P1" className="text-sm font-bold mb-[6.5px]">
              Happy Diwali
            </P>
            <P variant="P1" className="text-sm font-bold">
              $41,638
            </P>
          </div>
          <div className="flex items-center justify-between">
            <P variant="P1" className="text-secondary">
              Grab Special Discounts on All Your Favorite destination!
            </P>
            <P variant="P1" className="text-primary">
              Apply
            </P>
          </div>
        </div>
      </div>

      {open && <ChooseHotel open={open} setOpen={setOpen} />}
    </div>
  )
}
