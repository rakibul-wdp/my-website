import { P } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { FC } from 'react'
import { InputField } from '../auth'

export const AddCard: FC<{ open: boolean; setOpen: Function }> = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="top-[68.9%] md:top-[50%] pt-[31px] md:pt-[80px] pb-8 md:pb-[46px] px-[25px] md:px-[64px] max-w-[640px] max-h-[740px] rounded-t-[35px] lg:rounded-[10px]">
        <DialogHeader className="mb-[30px] md:mb-10">
          <DialogTitle className="text-[14px] leading-[17.34px] md:text-[36px] md:leading-[45.36px] font-bold font-outfit">
            Add a new Card
          </DialogTitle>
        </DialogHeader>

        <div className="w-full">
          <div className="w-full flex flex-col items-stretch justify-center gap-[17.5px] md:gap-6">
            <InputField label="Card Number" type="text" placeholder="5311 1322 4321 3507" />
            <div className="flex items-center justify-center gap-[17.5px] md:gap-6">
              <InputField label="Exp. Date" type="text" placeholder="02/30" />
              <InputField label="CVC" type="text" placeholder="439" />
            </div>
            <InputField label="Name on Card" type="text" placeholder="Ann Pine" />
            <InputField label="Country or Region" type="text" placeholder="•••••••••••••••••" />
          </div>

          <div className="mt-[17px] mb-[23px] md:mt-[26px] md:mb-[33px] flex items-center justify-start gap-[6px] md:gap-2">
            <Checkbox className="border-secondary/40 data-[state=checked]:bg-blue-400 data-[state=checked]:border-blue-600" />
            <P variant="P1">Securely save my information for 1-click checkout</P>
          </div>

          <Button
            variant="default"
            size="default"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Add card
          </Button>

          <P
            variant="P1"
            className="text-secondary text-center mt-[14px] md:mt-5 mb-7 md:mb-[31px]"
          >
            By confirming your subscription, you allow The Outdoor Inn Crowd Limited to charge your
            card for this payment and future payments in accordance with their terms. You can always
            cancel your subscription.
          </P>
        </div>
      </DialogContent>
    </Dialog>
  )
}
