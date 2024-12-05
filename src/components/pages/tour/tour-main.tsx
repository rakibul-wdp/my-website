import { Container } from '@/components/common'
import { FC } from 'react'
import { Filter } from './filter'
import { MainSection } from './main-section'

export const TourMain: FC = () => {
  return (
    <Container className="mt-6 lg:mt-[157px] mb-[86px] md:mb-[109px] flex flex-col lg:flex-row items-start justify-center gap-[31px] lg:gap-[35px]">
      <Filter />
      <MainSection />
    </Container>
  )
}
