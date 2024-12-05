import { Container } from '@/components/common'
import { P, Title } from '@/components/typography'
import { cn } from '@/lib/utils'
import { FC } from 'react'
import { SearchForm } from '../../shared/filter'

export const Hero: FC = () => {
  return (
    <section className="pt-[54px] md:pt-[95px]">
      <div
        className={cn(
          'pb-[48px] pt-[102px] lg:pt-[176px] lg:pb-[140px] xl:pb-[163px]',
          'flex flex-col text-center items-center justify-center gap-[7px] md:gap-[10px] ',
          'bg-home-hero-bg-img bg-center bg-no-repeat bg-cover',
        )}
      >
        <Title variant="H1" className="capitalize text-white">
          Discover the <span className="text-primary">world</span> around you
        </Title>
        <P variant="P1" className="text-white">
          Lorem ipsum dolor sit amet consectetur. Sed sed nec facilisis adipiscing phasellus nibh
          arcu ultricies.
        </P>
        <Container>
          <div className="lg:bg-white rounded-xl mt-5 md:mt-10">
            <SearchForm />
          </div>
        </Container>
      </div>
    </section>
  )
}
