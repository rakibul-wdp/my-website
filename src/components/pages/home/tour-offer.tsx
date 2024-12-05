import { Container } from '@/components/common'
import { P, SubTitle } from '@/components/typography'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextDefault,
  CarouselPreviousDefault,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { FC } from 'react'

export interface ITourOfferPackages {
  id: number
  img: string
  off: number
  place: string
  tripType: string
  price: string
}

export const tourOfferPackages: ITourOfferPackages[] = [
  {
    id: 1,
    img: '/images/bangkok.png',
    off: 20,
    place: 'Bangkok',
    tripType: 'Round-trip 3D/4N',
    price: '$849-$999',
  },
  {
    id: 2,
    img: '/images/george-town.png',
    off: 10,
    place: 'George Town',
    tripType: 'Round-trip 3D/4N',
    price: '$849-$999',
  },
  {
    id: 3,
    img: '/images/sentosa.png',
    off: 20,
    place: 'Sentosa',
    tripType: 'Round-trip 3D/4N',
    price: '$849-$999',
  },
  {
    id: 4,
    img: '/images/bangkok.png',
    off: 20,
    place: 'Bangkok',
    tripType: 'Round-trip 3D/4N',
    price: '$849-$999',
  },
]

export const TourOffer: FC = () => {
  return (
    <Container className="mt-[76px] mb-[89px]">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {tourOfferPackages.map(({ id, img, off, place, tripType, price }) => (
            <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="border-dotted border-secondary rounded-md">
                  <CardContent className="flex items-center justify-center gap-[22px] pt-[13px] pb-3 pl-[13px]">
                    <div className="relative inline-block">
                      <P
                        variant="P1"
                        className="bg-primary text-white absolute top-2 right-2 rounded-[5px] px-3 py-1"
                      >
                        {off}%off
                      </P>
                      <Image src={img} width="180" height="166" alt="tour offer" />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-[26px]">
                      <div>
                        <SubTitle variant="H4">{place}</SubTitle>
                        <P variant="P1" className="text-secondary">
                          {tripType}
                        </P>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <P variant="P1" className="text-secondary">
                          From
                        </P>
                        <SubTitle variant="H4">{price}</SubTitle>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPreviousDefault />
        <CarouselNextDefault />
      </Carousel>
    </Container>
  )
}
