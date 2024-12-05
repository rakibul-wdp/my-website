import { Container } from '@/components/common'
import { P } from '@/components/typography'
import { Company } from './company'
import { CompanyInfo } from './company-info'
import { Navigation } from './navigation'
import { PaymentConnected } from './payment-connected'
import { Resources } from './resources'

export const Footer = () => {
  return (
    <footer className="w-full bg-card-BG-Color-1 pt-6 md:pt-[72px]">
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-0">
          <CompanyInfo />
          <div className="grid grid-cols-2 lg:grid-cols-4 items-start gap-y-[31px] lg:gap-y-0">
            <Navigation />
            <Resources />
            <Company />
            <PaymentConnected />
          </div>
        </div>
      </Container>
      <div className="mt-[50px] md:mt-10">
        <P
          variant="P2"
          className="text-[#0000004D] border-t border-[#E5E5E5] py-[11px] md:pt-[14.5px] md:pb-2 text-center"
        >
          Copyright ® 2024, All rights Reserved.
        </P>
      </div>
    </footer>
  )
}
