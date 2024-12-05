import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { FC } from 'react'
import { DialogCards } from './dialog-cards'
import { DialogFilter } from './dialog-filter'

export const ChooseHotel: FC<{ open: boolean; setOpen: Function }> = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent className="top-[68.9%] md:top-[50%] pt-[23px] md:pt-10 md:pb-14 px-5 md:px-[46px] max-w-[1052px] max-h-[894px] overflow-y-auto h-[573px] md:h-[854px] overflow-x-hidden scroll-hidden rounded-t-[35px] lg:rounded-[10px]">
        <DialogHeader>
          <DialogTitle className="mx-auto text-[22px] leading-[27.72px] md:text-3xl lg:text-4xl xl:text-[46px] xl:leading-[57.96px]">
            Choose Hotel
          </DialogTitle>
        </DialogHeader>

        <div className="bg-card-BG-Color-2/50 flex items-center justify-between w-[80%] mx-auto px-3 border border-secondary/35 rounded-[3px] mt-[21px] md:mt-[35px] mb-[18px] md:mb-[26px]">
          <Input
            type="text"
            id=""
            placeholder="Type something"
            className="w-full lg:w-[80%] border-none bg-card-BG-Color-2/10 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Image src="/icons/search.svg" alt="search logo" width={20} height={20} />
        </div>
        <DialogFilter />

        <DialogCards />

        <Button
          variant="default"
          size="default"
          className="w-[25%] md:w-[15%] mx-auto"
          onClick={() => setOpen(false)}
        >
          View All
        </Button>
      </DialogContent>
    </Dialog>
  )
}
