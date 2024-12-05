import { Container } from '@/components/common'
import { Title } from '@/components/typography'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { FC } from 'react'

export const Holiday: FC = () => {
  return (
    <section className="pb-16">
      <div
        className={cn(
          'flex flex-col text-center md:text-start items-center md:items-start justify-center',
          'bg-holiday-bg-img bg-center bg-no-repeat bg-cover',
        )}
      >
        <Container className="pb-[119px] md:pb-[105px] pt-[84px] md:pt-[111px] md:pl-10 1320px:pl-12">
          <Title variant="H2" className="capitalize text-white">
            Book Ko Samui
            <br />
            Holiday Packages
          </Title>
          <Title variant="H3" className="text-white font-medium mt-[5px] mb-4">
            Including a Visit to Museum of Ico Cream
          </Title>
          <Button variant="default" size="default" className="hover:text-white">
            Explore Now
          </Button>
        </Container>
      </div>
    </section>
  )
}
