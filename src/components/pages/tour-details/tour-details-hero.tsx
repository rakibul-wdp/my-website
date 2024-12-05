import { Container } from '@/components/common'
import { P, Title } from '@/components/typography'
import { cn } from '@/lib/utils'
import { FC } from 'react'

export const TourDetailsHero: FC = () => {
  return (
    <section className="pt-[54px] md:pt-[95px] mb-[39px] md:mb-[43px]">
      <div
        className={cn(
          'pt-[37px] lg:pt-[60px] pb-[35px] lg:pb-[37px]',
          'flex flex-col text-center items-center justify-center gap-[7px] md:gap-[10px] ',
          'bg-home-hero-bg-img bg-center bg-no-repeat bg-cover',
        )}
      >
        <Container className="flex flex-col items-center md:items-start justify-center md:gap-2">
          <Title
            variant="H3"
            className="capitalize text-white border-b border-white border-opacity-10 pb-[2px]"
          >
            Romantic Escape to Krai & Phuket
          </Title>
          <div className="flex items-center justify-center gap-[22px]">
            <P variant="P1" className="text-white/60">
              Customizable
            </P>
            <P variant="P1" className="text-white/60">
              6N/7D
            </P>
            <P variant="P1" className="text-white/60">
              3N Krabi
            </P>
            <P variant="P1" className="text-white/60">
              3N Phuket
            </P>
          </div>
        </Container>
      </div>
    </section>
  )
}
