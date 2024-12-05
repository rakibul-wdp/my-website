'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

export const LoginButton: FC = () => {
  const router = useRouter()

  return (
    <Button
      variant="outline"
      size="lg"
      className="group flex min-w-fit items-center justify-center gap-[3px] md:gap-[11px] font-medium font-outfit text-[12px] leading-[15.12px] md:text-[16px] md:leading-[20.16px] background"
      onClick={() => router.push('/signup')}
    >
      <Image
        src="/icons/user-icon-black.svg"
        width={24}
        height={24}
        alt="User Icon Black"
        className="h-auto w-[14px] md:w-6 group-hover:hidden"
      />
      <Image
        src="/icons/user-icon-white.svg"
        width={24}
        height={24}
        alt="User Icon White"
        className="h-auto w-[14px] md:w-6 hidden group-hover:block"
      />
      Sign In / Register
    </Button>
  )
}
