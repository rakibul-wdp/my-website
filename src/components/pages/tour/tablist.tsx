import { P } from '@/components/typography'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FC } from 'react'

export interface ITabLists {
  id: number
  tab: string
  value: string
}

export const tabLists: ITabLists[] = [
  {
    id: 1,
    tab: 'ALL PACKAGES (112)',
    value: 'all-packages',
  },
  {
    id: 2,
    tab: 'HONEYMOON',
    value: 'honeymoon',
  },
  {
    id: 3,
    tab: "FAMILY VACAY'S (23)",
    value: 'family-vacancy',
  },
  {
    id: 4,
    tab: 'Group Tours (4)',
    value: 'group-tours',
  },
]

export const Tablist: FC = () => {
  return (
    <>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          <TabsList className="w-full justify-between bg-transparent p-0 h-fit">
            {tabLists.map(({ id, tab, value }) => (
              <CarouselItem key={id} className="basis-1/1">
                <TabsTrigger
                  key={id}
                  value={value}
                  className="data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:border-b-4 data-[state=active]:border-primary data-[state=active]:rounded-none font-semibold text-base font-outfit p-0 pb-[3px] lg:pb-3"
                >
                  {tab}
                </TabsTrigger>
              </CarouselItem>
            ))}
          </TabsList>
        </CarouselContent>
      </Carousel>
      <div className="hidden md:block">
        <div className="flex items-center justify-between mt-11 lg:mt-[54px] mb-6 lg:mb-[33px]">
          <P variant="P2">
            Showing 4 of <span className="text-primary">257 places</span>
          </P>
          <div className="flex items-center justify-center gap-1">
            <P variant="P2" className="font-montserrat font-semibold">
              Sorted By:
            </P>
            <Select>
              <SelectTrigger className="w-[100px] border-none">
                <SelectValue placeholder="Popular" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </>
  )
}
