import { Container } from '@/components/common'
import { P, Title } from '@/components/typography'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'

export interface ITestimonials {
  id: number
  testimonial: string
  avatar: string
  name: string
  company: string
}

export const testimonials: ITestimonials[] = [
  {
    id: 1,
    testimonial:
      'The service was absolutely impeccible. I see myself and my family visiting here much more frequently.',
    avatar: '/icons/avatar-1.png',
    name: 'John Doe',
    company: 'Some Company',
  },
  {
    id: 2,
    testimonial:
      'Lorem ipsum dolor sit amet consectetur. Fringilla id iaculis sagittis blandit eget vitae parturient diam. Scelerisque purus semper.',
    avatar: '/icons/avatar-2.png',
    name: 'John Doe',
    company: 'Some Company',
  },
  {
    id: 3,
    testimonial:
      'Lorem ipsum dolor sit amet consectetur. Fringilla id iaculis sagittis blandit eget vitae parturient diam. Scelerisque purus semper.',
    avatar: '/icons/avatar-3.png',
    name: 'John Doe',
    company: 'Some Company',
  },
  {
    id: 4,
    testimonial:
      'Lorem ipsum dolor sit amet consectetur. Fringilla id iaculis sagittis blandit eget vitae parturient diam. Scelerisque purus semper.',
    avatar: '/icons/avatar-1.png',
    name: 'John Doe',
    company: 'Some Company',
  },
  {
    id: 5,
    testimonial:
      'Lorem ipsum dolor sit amet consectetur. Fringilla id iaculis sagittis blandit eget vitae parturient diam. Scelerisque purus semper.',
    avatar: '/icons/avatar-1.png',
    name: 'John Doe',
    company: 'Some Company',
  },
]

export const Testimonials: FC = () => {
  return (
    <Container className="mb-[72px] md:mb-[91px]">
      <div className="flex flex-col text-center items-center justify-center mb-8 md:mb-10">
        <P variant="P1" className="text-primary mb-[3px] md:mb-[5px]">
          Testimonials
        </P>
        <Title variant="H2">What Our Clients Say About Us</Title>
      </div>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map(({ id, testimonial, avatar, name, company }) => (
            <CarouselItem key={id} className="sm:basis-1/2 lg:basis-1/3 pl-5">
              <Card
                className={cn(
                  'shadow-none rounded-none px-10 py-9',
                  `${id % 2 === 0 ? 'border-x-[1px] border-y-0 border-[#2B3990]' : 'border-none'}`,
                )}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col items-center justify-center gap-[26px]">
                    <div className="flex flex-col items-center">
                      <div className="flex items-start justify-start w-full mb-2">
                        <Image
                          src="/icons/start-quote.svg"
                          width="27"
                          height="24"
                          alt="tour offer"
                        />
                      </div>
                      <P variant="P1" className="text-center">
                        {testimonial}
                      </P>
                      <div className="flex items-end justify-end w-full mt-2">
                        <Image src="/icons/end-quote.svg" width="27" height="24" alt="tour offer" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                      <Image
                        src={avatar}
                        width="49"
                        height="49"
                        alt="avatar"
                        className="w-8 md:w-[49px] h-8 md:h-[49px]"
                      />
                      <div>
                        <P variant="P1" className="font-semibold mb-[2px]">
                          {name}
                        </P>
                        <P variant="P1" className="text-secondary">
                          {company}
                        </P>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-9 sm:mt-16 md:mt-[87px] gap-1">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Container>
  )
}
