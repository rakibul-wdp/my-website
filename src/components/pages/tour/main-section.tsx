'use client'

import { P, SubTitle } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { PaginationSection } from './pagination-section'
import { Tablist } from './tablist'

export interface ITourFacilities {
  id: number
  facilities: string
}
export interface ITourPlaces {
  id: number
  place: string
}
export interface ITourPlacesCard {
  id: number
  img: string
}

export const tourFacilities: ITourFacilities[] = [
  {
    id: 1,
    facilities: 'Round Trip Flights',
  },
  {
    id: 2,
    facilities: 'Airport Transfers',
  },
  {
    id: 3,
    facilities: 'Selected Meals',
  },
  {
    id: 4,
    facilities: '5 Star Hotels',
  },
  {
    id: 5,
    facilities: '9 Activities',
  },
]
export const tourPlaces: ITourPlaces[] = [
  {
    id: 1,
    place: 'James Bond Island Tour',
  },
  {
    id: 2,
    place: 'Hot Spring & Emerald Tour',
  },
  {
    id: 3,
    place: '7 Island Sunset Tour',
  },
]
export const tourPlacesCard: ITourPlacesCard[] = [
  {
    id: 1,
    img: '/images/tour-img-1.jpeg',
  },
  {
    id: 2,
    img: '/images/tour-img-2.jpeg',
  },
  {
    id: 3,
    img: '/images/tour-img-3.jpeg',
  },
  {
    id: 4,
    img: '/images/tour-img-4.jpeg',
  },
  {
    id: 5,
    img: '/images/tour-img-5.jpeg',
  },
]

export const MainSection: FC = () => {
  const router = useRouter()

  return (
    <Tabs defaultValue="all-packages" className="w-full">
      <Tablist />
      <TabsContent
        value="all-packages"
        className="w-full flex flex-col items-center justify-center gap-[30px]"
      >
        {tourPlacesCard.map(({ id, img }) => (
          <Card
            key={id}
            className="w-full bg-card-BG-Color-2/40 border border-card-BG-Color-2/90 rounded"
          >
            <CardContent className="flex flex-col md:flex-row items-center justify-between gap-[18px] md:gap-[38px] p-5 pb-6 md:p-6 md:pl-5">
              <div className={cn('relative inline-block')}>
                <P
                  variant="P3"
                  className="font-medium font-montserrat bg-white/50 backdrop-blur-sm absolute top-2 right-2 rounded-[5px] p-2"
                >
                  9 images
                </P>
                <Image
                  src={img}
                  width={300}
                  height={292}
                  alt="tour image"
                  className="rounded-xl md:rounded-none md:rounded-l-xl w-[517px] md:w-[316px] xl:w-[350px] 2xl:w-[400px] h-[242px] md:h-[383px] min-[1330px]:h-[305px] 2xl:h-[329px]"
                />
              </div>
              <div>
                <div className="flex flex-col md:flex-row items-start justify-between gap-[15px] md:gap-0 mb-1 md:mb-[35px]">
                  <div className="flex flex-col items-start justify-center gap-[5px] md:gap-2">
                    <SubTitle variant="H5">CVK Park Bosphorus Hotel Istanbul</SubTitle>
                    <P variant="P3" className="font-medium font-montserrat">
                      3N Krabi &nbsp; &nbsp; &nbsp; &nbsp; 3Nphuket
                    </P>
                  </div>
                  <div className="flex md:flex-col items-start justify-between w-full md:w-fit">
                    <P variant="P3" className="font-medium font-montserrat">
                      starting from
                    </P>
                    <div className="flex md:flex-col items-end justify-center">
                      <SubTitle variant="H4" className="text-primary font-montserrat">
                        $240<span className="text-[14px] leading-4">/per Person</span>
                      </SubTitle>
                      <P variant="P3" className="font-medium font-montserrat">
                        excl. tax
                      </P>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside flex flex-wrap items-center justify-start gap-x-3 md:gap-x-7 mb-[14px] md:mb-[11px]">
                  {tourFacilities.map(({ id, facilities }) => (
                    <li key={id}>
                      <P variant="P3" className="inline -ml-[11px]">
                        {facilities}
                      </P>
                    </li>
                  ))}
                </ul>
                <ul className="list-image-checkmark list-inside flex flex-wrap items-center justify-start gap-x-14">
                  {tourPlaces.map(({ id, place }) => (
                    <li key={id}>
                      <P variant="P3" className="inline text-primary -ml-[3px]">
                        {place}
                      </P>
                    </li>
                  ))}
                </ul>
                <div className="mt-[18px] md:mt-[46px] mb-5 md:mb-[31px] flex items-center justify-between">
                  <div className="flex items-center justify-center gap-1">
                    <Image src="/icons/cup.svg" width={16} height={16} alt="cup" />
                    <P variant="P3" className="font-bold font-montserrat">
                      20+ <span className="font-medium">Aminities</span>
                    </P>
                  </div>
                  <div className="flex items-start justify-center gap-1">
                    <div className="flex items-center justify-center">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Image
                          src="/icons/star.svg"
                          width="15"
                          height="14"
                          alt="star"
                          key={index}
                        />
                      ))}
                    </div>
                    <P variant="P3" className="font-medium font-montserrat">
                      5 Star Hotel
                    </P>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-[10px] md:gap-[21px] md:border-t md:border-secondary/50 md:pt-[13px]">
                  <Button variant="outline" size="default">
                    <Image src="/icons/heart.png" width={20} height={20} alt="love" />
                  </Button>
                  <Button
                    variant="default"
                    size="default"
                    className="w-full"
                    onClick={() => router.push('/tour-details')}
                  >
                    View Place
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        <PaginationSection />
      </TabsContent>
      <TabsContent value="honeymoon">
        <p>Honeymoon</p>
      </TabsContent>
      <TabsContent value="family-vacancy">
        <p>Family Vacancy</p>
      </TabsContent>
      <TabsContent value="group-tours">
        <p>Group Tours</p>
      </TabsContent>
    </Tabs>
  )
}
