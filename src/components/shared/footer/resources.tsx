import { P } from '@/components/typography'
import Link from 'next/link'
import { FC } from 'react'
import { resources } from './db'

export const Resources: FC = () => {
  return (
    <div className="min-w-fit">
      <P variant="P1" className="font-bold">
        Our Resources
      </P>
      <div className="space-y-2.5 pt-4 md:pt-6 md:space-y-3">
        {resources.map(({ label, link }) => (
          <Link href={link} key={label} className="group block transition-all delay-100">
            <P
              variant="P1"
              className="text-secondary transition-all delay-100 group-hover:text-primary"
            >
              {label}
            </P>
          </Link>
        ))}
      </div>
    </div>
  )
}
