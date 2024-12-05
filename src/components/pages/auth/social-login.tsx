import { P } from '@/components/typography'
import Image from 'next/image'
import { FC } from 'react'

export interface ISocials {
  id: number
  img: string
  name: string
}

export const socials: ISocials[] = [
  {
    id: 1,
    img: '/icons/facebook-auth.svg',
    name: 'Facebook',
  },
  {
    id: 2,
    img: '/icons/google.svg',
    name: 'Google',
  },
  {
    id: 3,
    img: '/icons/apple.svg',
    name: 'Apple',
  },
]

export const SocialLogin: FC = () => {
  return (
    <div>
      <div className="flex w-full items-center rounded-full mb-6 md:mb-8">
        <div className="flex-1 border-b border-secondary/40"></div>
        <P variant="P1" className="text-secondary px-3 md:px-4">
          Or Sign up with
        </P>
        <div className="flex-1 border-b border-secondary/40"></div>
      </div>

      <div className="flex items-center justify-center gap-3 md:gap-4">
        {socials.map(({ id, img, name }) => (
          <div
            className="w-full flex items-center justify-center py-2 sm:py-[9px] md:py-3 px-[25px] sm:px-[50px] md:px-[68px] border border-black rounded"
            key={id}
          >
            <Image
              src={img}
              width={24}
              height={24}
              alt={name}
              className="w-[18px] md:w-6 h-[18px] md:h-6"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
