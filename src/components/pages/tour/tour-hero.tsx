import { Container } from '@/components/common'
import { Title } from '@/components/typography'
import { cn } from '@/lib/utils'
import { FC } from 'react'
import { SearchForm } from '../home'

export const TourHero: FC = () => {
  return (
    <section className="pt-[54px] md:pt-[95px]">
      <div
        className={cn(
          'pb-[22px] pt-[73px] lg:pt-[59px] lg:pb-[63px]',
          'flex flex-col text-center items-center justify-center gap-[26px] lg:gap-[37px] ',
          'bg-home-hero-bg-img bg-center bg-no-repeat bg-cover',
        )}
      >
        <Title variant="H1" className="capitalize text-white">
          Holiday Packages
        </Title>
        <Container>
          <div className="lg:bg-white rounded-xl lg:shadow-SearchTour lg:-mb-[160px]">
            <SearchForm />
          </div>
        </Container>
      </div>
    </section>
  )
}
