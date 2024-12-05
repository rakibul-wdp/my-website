import { P, SubTitle } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import { FC } from 'react'
import { CheckboxFilter } from './checkbox-filter'

type Item = {
  id: string
  label: string
  data: number
}

const items: Item[] = [
  {
    id: 'phuket',
    label: 'Phuket',
    data: 75,
  },
  {
    id: 'bangkok',
    label: 'Bangkok',
    data: 71,
  },
  {
    id: 'krabi',
    label: 'Krabi',
    data: 43,
  },
  {
    id: 'pattaya',
    label: 'Pattaya',
    data: 40,
  },
]

const items2: Item[] = [
  {
    id: 'culture',
    label: 'Culture',
    data: 19,
  },
  {
    id: 'honeymoon',
    label: 'Honeymoon',
    data: 16,
  },
  {
    id: 'wildlife',
    label: 'Wildlife',
    data: 12,
  },
  {
    id: 'adventure',
    label: 'Adventure',
    data: 10,
  },
]

export const Filter: FC = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-5 lg:gap-[30px] w-full lg:w-fit">
      <div className="flex lg:flex-col items-center lg:items-start justify-between gap-[15px] lg:gap-[9px] lg:bg-[#EBEEF266] lg:border lg:border-[#E5E5E5] lg:rounded lg:pt-[29px] lg:pr-5 lg:pb-10 lg:pl-[18px] w-full">
        <SubTitle variant="H5">Search</SubTitle>
        <div className="bg-white flex items-center justify-between w-full px-2 border border-secondary/35 rounded-[3px]">
          <Input
            type="text"
            id=""
            placeholder="Type something"
            className="w-full lg:w-[80%] border-none bg-white focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Image src="/icons/search.svg" alt="search logo" width={20} height={20} />
        </div>
      </div>

      <div className="flex flex-col items-start justify-start lg:bg-[#EBEEF266] lg:border lg:border-[#E5E5E5] lg:rounded lg:pt-[29px] lg:pr-5 lg:pb-10 lg:pl-[18px] w-full">
        <SubTitle variant="H5">Filter By Price</SubTitle>
        <Input
          type="range"
          id=""
          placeholder="Type something"
          className=" border-none bg-white accent-primary focus-visible:ring-0 focus-visible:ring-offset-0 mt-[1px] lg:mt-[6px] -mb-[2px] lg:mb-[3px]"
        />
        <div className="flex items-center justify-between lg:justify-end w-full">
          <P variant="P1" className="font-bold lg:hidden">
            $0.00
          </P>
          <P variant="P1" className="font-bold">
            $150.00
          </P>
        </div>
        <Button
          variant="default"
          size="default"
          className="hidden lg:block lg:w-[55%] lg:mt-[23px]"
        >
          Submit
        </Button>
      </div>

      <CheckboxFilter heading={'Filters'} items={items} />
      <CheckboxFilter heading={'Themes'} items={items2} />
    </div>
  )
}
