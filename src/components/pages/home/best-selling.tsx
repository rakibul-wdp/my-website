import { Container } from '@/components/common'
import { P, Title } from '@/components/typography'
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

export interface IBestSelling {
  id: number
  img: string
  place: string
  price: number
}

export const bestSelling: IBestSelling[] = [
  {
    id: 1,
    img: '/images/klcc-park.png',
    place: 'KLCC Park',
    price: 9000,
  },
  {
    id: 2,
    img: '/images/sea-aquarium.png',
    place: 'S.E.A Aquarium',
    price: 9000,
  },
  {
    id: 3,
    img: '/images/maafushi.png',
    place: 'Maafushi',
    price: 9000,
  },
  {
    id: 4,
    img: '/images/thulusdhoo.png',
    place: 'Thulusdhoo',
    price: 9000,
  },
  {
    id: 5,
    img: '/images/klcc-park.png',
    place: 'KLCC Park',
    price: 9000,
  },
]

export const BestSelling: FC = () => {
  return (
    <Container className="mb-[50px] md:mb-32">
      <div className="flex flex-col text-center items-center justify-center mb-6 md:mb-[41px]">
        <P variant="P1" className="text-primary mb-[3px] md:mb-[5px]">
          Adventure
        </P>
        <Title variant="H2">Best Selling Destinations</Title>
      </div>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {bestSelling.map(({ id, img, place, price }) => (
            <CarouselItem key={id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card className="border-none shadow-none rounded-md">
                <CardContent className="p-0">
                  <div className="w-full relative inline-block">
                    <Image src={img} width="302" height="429" alt="tour offer" className="w-full" />
                    <div className="absolute bottom-11 left-5">
                      <Title variant="H3" className="text-white">
                        {place}
                      </Title>
                      <P variant="P1" className="text-white rounded-[5px]">
                        Starting at &{price} Per person
                      </P>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPreviousDefault />
        <CarouselNextDefault />
      </Carousel>
    </Container>
  )
}
