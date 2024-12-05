import { P } from '@/components/typography'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { TabsContent } from '@/components/ui/tabs'
import Image from 'next/image'
import { FC } from 'react'

export interface IIncludes {
  id: number
  img: string
  include: string
}
export interface IItineraryImgs {
  id: number
  img: string
  title: string
}

export const itineraryImgs: IItineraryImgs[] = [
  {
    id: 1,
    img: '/images/tour-img-1.jpeg',
    title: 'Airport to Hotel in Karabi: 4 Hours',
  },
  {
    id: 2,
    img: '/images/tour-img-6.jpeg',
    title: 'Check in to Hotel Naneg',
  },
]

export const includes: IIncludes[] = [
  {
    id: 1,
    img: '/icons/flight.svg',
    include: '1 Flight',
  },
  {
    id: 2,
    img: '/icons/hotel.svg',
    include: '1 Hotel',
  },
  {
    id: 3,
    img: '/icons/transfer.svg',
    include: '1 Transfer',
  },
  {
    id: 4,
    img: '/icons/activity.svg',
    include: '1 Activity',
  },
]

export const Itinerary: FC = () => {
  return (
    <TabsContent
      value="itinerary"
      className="w-full basis-[146%] mt-0 bg-transparent md:bg-card-BG-Color-2/50 md:border border-secondary/5 md:rounded"
    >
      <div className="bg-accent py-3 md:py-[18px] px-[14px] md:px-[30px] flex items-start justify-between mb-[19px] md:mb-[31px] rounded">
        <P variant="P1" className="font-bold text-primary">
          7 Day Plan
        </P>
        <P variant="P1" className="font-semibold">
          2 Flight & 2 Tranfers
        </P>
        <P variant="P1" className="font-semibold">
          2 Hotels
        </P>
        <P variant="P1" className="font-semibold">
          9 Activities
        </P>
      </div>

      <div className="md:pl-[30px] md:pr-6 flex flex-col min-[990px]:flex-row items-start justify-center gap-5">
        <div className="w-full min-[990px]:max-w-[152px] min-[990px]:min-w-[152px] py-[10px] px-5 md::pt-[15px] md:pr-[23px] md:pb-7 md:pl-7 bg-white border border-secondary/10 md:border-primary/80 rounded-sm shadow-SearchTour md:shadow-none">
          <P variant="P1" className="font-bold mb-[2px] md:mb-[14px]">
            Day Plan
          </P>
          <P variant="P1">
            <span className="text-primary">20 Dec, Sat</span> 21 Dec, Sun 22 Dec, Mon 23 Dec, Tue 24
            Dec, Wed 25 Dec, Thu 26 Dec, Fri
          </P>
        </div>

        <div className="flex flex-col items-center justify-center gap-[30px] pb-[21px] md:pb-14">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="w-full" key={index}>
              <Card key={1} className="md:bg-white border-0 md:border rounded-[5px] rounded-b-none">
                <CardContent className="px-0 pb-0">
                  <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-3 md:gap-2">
                    <div className="flex items-center justify-center gap-[5px] md:gap-[15px] pl-5">
                      <P variant="P1">Included:</P>
                      <div className="flex items-center justify-center gap-[9px]">
                        {includes.map(({ id, img, include }) => (
                          <div
                            className="bg-card-BG-Color-2/40 py-[2px] md:py-1 px-[3px] md:px-[6px] rounded-[3px] flex items-center justify-center gap-[5px] md:gap-[6px]"
                            key={id}
                          >
                            <Image src={img} width={12} height={12} alt={include} />
                            <P variant="P2" className="text-secondary">
                              {include}
                            </P>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="md:mr-5 w-full md:w-fit py-[2px] md:py-[9px] md:px-11 text-center bg-primary rounded-b-[10px]">
                      <P variant="P1" className="font-bold text-white">
                        Day 1- Arrival Phuket
                      </P>
                    </div>
                  </div>

                  <div className="px-5 mt-[13px] md:mt-[25px] mb-5 md:mb-[18px] flex items-center justify-between">
                    <div className="flex items-center justify-center gap-[5px] md:gap-[19px]">
                      <Image src="/icons/flight2.svg" width={12} height={12} alt="airplane" />
                      <P variant="P1">Flight From New Delhi to Phuket: 04h 30m</P>
                    </div>
                    <div className="flex items-center justify-center gap-[18px] md:gap-[38px]">
                      <P variant="P1" className="text-primary cursor-pointer">
                        Remove
                      </P>
                      <P variant="P1" className="text-primary cursor-pointer">
                        Change
                      </P>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-[23px] md:gap-[81px] px-5">
                    <div className="flex items-center justify-center">
                      <div className="flex flex-col items-center justify-center gap-[3px]">
                        <div className="w-[28px] md:w-[47px] h-[28px] md:h-[47px] bg-card-BG-Color-2/40 rounded-full"></div>
                        <P variant="P1" className="hidden md:block">
                          5G.89
                        </P>
                      </div>

                      <div className="flex flex-col items-start justify-center gap-[3px] md:gap-[10px] ml-4 md:ml-7">
                        <div className="flex md:flex-col items-start justify-center gap-[7px] md:gap-2">
                          <P variant="P3" className="font-bold">
                            09:55
                          </P>
                          <P variant="P1">Sat 21 Dec</P>
                        </div>
                        <P variant="P1">New Delhi</P>
                      </div>

                      <div className="flex items-center justify-between mx-1 md:mx-[5px]">
                        <div className="w-[4px] md:w-[6px] h-[4px] md:h-[6px] bg-primary rounded-full"></div>
                        <div className="flex-1 w-[55px] md:w-[67px] h-[1px] bg-secondary"></div>
                        <Image
                          src="/icons/flight2.svg"
                          width={12}
                          height={12}
                          alt="airplane"
                          className="mx-1"
                        />
                        <div className="flex-1 w-[55px] md:w-[67px] h-[1px] bg-secondary"></div>
                        <div className="w-[4px] md:w-[6px] h-[4px] md:h-[6px] bg-primary rounded-full"></div>
                      </div>

                      <div className="flex flex-col items-end justify-center gap-[3px] md:gap-[10px]">
                        <div className="flex md:flex-col items-end justify-center gap-[7px] md:gap-2">
                          <P variant="P3" className="font-bold">
                            15:55
                          </P>
                          <P variant="P1">Sat 21 Dec</P>
                        </div>
                        <P variant="P1">Phuket</P>
                      </div>
                    </div>

                    <div className="flex md:flex-col items-center md:items-start justify-center gap-3 md:gap-2">
                      <P variant="P3" className="font-bold">
                        Baggage
                      </P>
                      <div className="flex items-center justify-center gap-[6px] md:gap-[11px]">
                        <Image src="/icons/cabin.svg" width={12} height={12} alt="airplane" />
                        <P variant="P1">Cabin:7Kgs</P>
                      </div>
                      <div className="flex items-center justify-center gap-[6px] md:gap-[11px]">
                        <Image src="/icons/check-in.svg" width={12} height={12} alt="airplane" />
                        <P variant="P1">Check in :20 Kgs</P>
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 pb-7 md:mt-[34px] md:pb-[27px] px-5">
                    <P
                      variant="P2"
                      className="pt-[7px] pb-[6px] md:py-3 border border-primary/80 rounded text-center"
                    >
                      There are more ways to reach your destination{' '}
                      <span className="text-base text-primary">VIEW TRANSPORT OPTION(S)</span>
                    </P>
                  </div>
                </CardContent>
              </Card>

              <div className="md:hidden px-5 mb-7">
                <Separator className="bg-secondary/30" />
              </div>

              {itineraryImgs.map(({ id, img, title }) => (
                <div
                  className={`bg-white mx-5 md:mx-0 pt-[13px] pb-3 md:py-[30px] px-5 border md:border-t-0 ${id === 1 ? 'rounded-t-[5px] border-b-0 md:border-b' : 'rounded-b-[5px] md:rounded-b-[5px]'} md:rounded-none`}
                  key={id}
                >
                  <div className="flex items-center justify-between mb-[15px] md:mb-[18px]">
                    <P variant="P1">{title}</P>
                    <div className="flex items-center justify-center gap-[18px] md:gap-[38px]">
                      <P variant="P1" className="text-primary cursor-pointer">
                        Remove
                      </P>
                      <P variant="P1" className="text-primary cursor-pointer">
                        Change
                      </P>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-3 md:gap-[38px]">
                    <Image
                      src={img}
                      width={166}
                      height={162}
                      alt="airplane"
                      className="rounded-md md:rounded-none md:rounded-s-xl"
                    />
                    <div className="flex flex-col items-start justify-center gap-[2px] md:gap-[5px]">
                      <P variant="P2" className="font-bold text-sm">
                        Private Transfer
                      </P>
                      <P variant="P1">
                        Lorem ipsum dolor sit amet consectetur. Facilisis felis sapien pellentesque
                        nisl aliquet ipsum at. Viverra gravida mi eu turpis morbi. Auctor ut
                        consequat commodo sit. Dis tellus turpis sed leo.
                      </P>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </TabsContent>
  )
}
