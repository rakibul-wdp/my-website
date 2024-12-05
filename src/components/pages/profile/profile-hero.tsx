import { P, Title } from '@/components/typography'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FC } from 'react'

export const ProfileHero: FC = () => {
  return (
    <section className="pt-[54px] md:pt-[95px]">
      <div
        className={cn(
          'h-[130px] md:h-[176px]',
          'bg-home-hero-bg-img bg-center bg-no-repeat xl:bg-cover',
        )}
      ></div>

      <div className="flex flex-col items-center justify-center gap-[13px] md:gap-6 -mt-[57px] md:-mt-[88px] mb-5 md:mb-16">
        <div className="relative">
          <Image
            src="/images/profile-pic.png"
            width={200}
            height={200}
            alt="profile pic"
            className="w-[110px] h-[110px] md:w-[200px] md:h-[200px]"
          />

          <div
            className={cn(
              'bg-primary w-[29px] md:w-[53px] h-[29px] md:h-[53px] flex items-center justify-center rounded-full',
              'absolute bottom-0 left-1/2 -translate-x-[calc(50%-39px)] md:-translate-x-[calc(50%-73px)]',
            )}
          >
            <Image
              src="/images/edit-pen.svg"
              width={28}
              height={28}
              alt="profile pic edit"
              className="w-[15px] md:w-[28px] h-[15px] md:h-[28px]"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[1px]">
          <Title variant="H3">Ann Pine</Title>
          <P variant="P1">ann.pine@gmail.com</P>
        </div>
      </div>
    </section>
  )
}
