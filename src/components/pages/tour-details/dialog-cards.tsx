import { P } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import { FC } from 'react'

export interface IHotels {
  id: number
  img: string
  place: string
  star: number
  cost: number
  days: number
}

export const hotels: IHotels[] = [
  {
    id: 1,
    img: '/images/baros.png',
    place: 'Baros',
    star: 5,
    cost: 800.0,
    days: 7,
  },
  {
    id: 2,
    img: '/images/hotel-2.png',
    place: 'Clarke Quay',
    star: 5,
    cost: 800.0,
    days: 7,
  },
  {
    id: 3,
    img: '/images/hotel-3.png',
    place: 'Batu Caves',
    star: 5,
    cost: 800.0,
    days: 7,
  },
]

export const DialogCards: FC = () => {
  return (
    <div className="mt-8 md:mt-[13px] mb-6 md:mb-[31px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 md:gap-6">
      {hotels.map(({ id, img, place, star }) => (
        <Card className="w-fit p-[6.19px] md:p-[10px] pb-[13px] md:pb-5" key={id}>
          <CardContent className="p-0">
            <Image src={img} width="282" height="218" alt="adventure place" />
            <div className="">
              <P variant="P1" className="font-bold mt-[15px] mb-[3px]">
                {place}
              </P>
              <P variant="P1" className="text-secondary mb-[5px]">
                Ao Nang180 m drive to Dao
              </P>
              <P variant="P1" className=" mb-[5px]">
                Sat, 21 Dec 2024-Tue, 24 Dec 2024
              </P>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center justify-center gap-2">
                  <Image src="/icons/include.svg" width="12" height="12" alt="include" />
                  <P variant="P3" className="font-medium">
                    Includes Breakfast
                  </P>
                </div>
                <P variant="P1" className="text-secondary">
                  Deluxe Room
                </P>
              </div>
              <div className="flex items-center justify-start mb-[10px]">
                {Array.from({ length: star }).map((_, index) => (
                  <Image src="/icons/star.svg" width="15" height="14" alt="star" key={index} />
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-0 justify-between">
            <P variant="P1" className="text-primary">
              CHANGE ROOM
            </P>
            <Button variant="outline" size="sm" className="font-medium">
              View Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
