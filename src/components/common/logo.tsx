import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const Logo: FC<IClassName> = ({ className }) => (
  <Link href="/" className="">
    <Image
      src="/shared/skygate-logo.png"
      width={98}
      height={98}
      className={className}
      alt="Skygate Logo"
    />
  </Link>
)
