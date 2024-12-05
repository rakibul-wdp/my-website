import { P } from '@/components/typography'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { cards, socials } from './db'

export const PaymentConnected: FC = () => {
  return (
    <div className="min-w-fit">
      <div>
        <P variant="P1" className="font-bold">
          Payment Methods
        </P>
        <div className="flex flex-wrap items-center justify-start gap-[9px] md:gap-[21px] mt-[13px] md:mt-[22px]">
          {cards.map(({ id, img }) => (
            <Image
              src={img}
              width={`${id === 1 ? 64 : id === 2 ? 62 : 60}`}
              height={`${id === 3 ? 43 : 40}`}
              alt="card image"
              key={id}
            />
          ))}
        </div>
      </div>
      <div>
        <P variant="P1" className="font-bold mt-[19px] md:mt-[23px] mb-[10px] md:mb-[9px]">
          Stay Connected
        </P>
        <div className="flex items-center justify-start gap-[6.78px] md:gap-[10px]">
          {socials.map(({ id, name, icon, url }) => (
            <Link href={url} key={id} className="bg-white hover:bg-primary delay-75 rounded-full">
              <Image
                src={icon}
                width="18"
                height="18"
                alt={name}
                key={id}
                className="w-fit p-[6.1px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
