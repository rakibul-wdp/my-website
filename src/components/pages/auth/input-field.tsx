import { P } from '@/components/typography'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { EyeOff } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

type IInputField = { label: string; type: string; placeholder: string }

export const InputField: FC<IInputField> = ({ label, type, placeholder }) => {
  return (
    <div className="relative">
      <label htmlFor="email" className="absolute top-[-7px] md:top-[-11px] left-3 bg-white px-1">
        <P variant="P1">{label}</P>
      </label>
      <input
        type={type}
        id={type}
        placeholder={placeholder}
        className={cn(
          'border border-secondary/30 rounded w-full py-[13px] md:py-[18px] px-3 md:px-4',
          label === 'Country or Region' && 'hidden',
        )}
      />

      <Select>
        <SelectTrigger
          className={cn(
            'bg-white border border-secondary/30 rounded w-full h-full py-[13px] md:py-[18px] px-3 md:px-4',
            label !== 'Country or Region' && 'hidden',
          )}
        >
          <SelectValue placeholder="Ghana" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">USA</SelectItem>
          <SelectItem value="dark">UK</SelectItem>
          <SelectItem value="system">India</SelectItem>
        </SelectContent>
      </Select>

      <EyeOff
        className={cn('absolute top-5 right-3 cursor-pointer', type !== 'password' && 'hidden')}
      />
      <Image
        src="/icons/visa-icon.svg"
        width={47}
        height={12}
        alt="visa card"
        className={cn('absolute top-6 right-4 cursor-pointer', label !== 'Card Number' && 'hidden')}
      />
    </div>
  )
}
