import { Container } from '@/components/common'
import { P, SubTitle, Title } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import { FC } from 'react'

export interface IAdventurePlaces {
  id: number
  img: string
  place: string
  star: number
  cost: number
  days: number
}

export const adventurePlaces: IAdventurePlaces[] = [
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
    img: '/images/clarke-quay.png',
    place: 'Clarke Quay',
    star: 5,
    cost: 800.0,
    days: 7,
  },
  {
    id: 3,
    img: '/images/batu-caves.png',
    place: 'Batu Caves',
    star: 5,
    cost: 800.0,
    days: 7,
  },
  {
    id: 4,
    img: '/images/phuket.png',
    place: 'Phuket',
    star: 5,
    cost: 800.0,
    days: 7,
  },
]

export const Adventure: FC = () => {
  return (
    <section className="bg-card-BG-Color-2/90">
      <Container className="pt-[34px] pb-10 md:py-14 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center gap-[5px]">
          <P variant="P1" className="text-primary">
            Embrace the Depths of Nature
          </P>
          <Title variant="H2">Your Ideal Forest Adventure</Title>
          <P variant="P1" className="text-secondary mt-[5px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </P>
        </div>

        <div className="mt-8 md:mt-[45px] mb-6 md:mb-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {adventurePlaces.map(({ id, img, place, star, cost, days }) => (
            <Card className="w-fit p-[6.19px] md:p-[10px] pb-[13px] md:pb-5" key={id}>
              <CardContent className="p-0">
                <Image src={img} width="282" height="218" alt="adventure place" />
                <div className="p-[6.19px] md:pl-[10px]">
                  <P variant="P1" className="text-secondary mt-[15px] mb-2">
                    {place}
                  </P>
                  <div>
                    <div className="flex items-center justify-start gap-3">
                      <div className="flex items-center justify-center">
                        {Array.from({ length: star }).map((_, index) => (
                          <Image
                            src="/icons/star.svg"
                            width="15"
                            height="14"
                            alt="star"
                            key={index}
                          />
                        ))}
                      </div>
                      <P variant="P1">(4.8 Retreats) </P>
                    </div>
                    <div className="mt-[10px] mb-7">
                      <SubTitle variant="H4">
                        ${cost}.00/<span className="font-normal">Person</span>
                      </SubTitle>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-0 justify-between pl-[6.19px] md:pl-[10px] pr-[4.55px] md:pr-[17px]">
                <div className="flex items-center justify-center gap-2">
                  <Image src="/icons/clock.svg" width="14" height="14" alt="clock" />
                  <P variant="P1">{days} Days</P>
                </div>
                <Button variant="outline" size="sm">
                  Book Now{' '}
                  <Image
                    src="/icons/left-arrow.svg"
                    width="20"
                    height="20"
                    className="rotate-180"
                    alt="arrow icon"
                  />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Button variant="default" size="default">
          View All
        </Button>
      </Container>
    </section>
  )
}
