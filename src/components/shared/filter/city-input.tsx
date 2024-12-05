'use client'

import { Check } from 'lucide-react'
import * as React from 'react'

import { P } from '@/components/typography'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]

export const CityInput: React.FC = () => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="filterSearch"
          role="combobox"
          aria-expanded={open}
          className="w-full bg-white lg:bg-transparent border border-s-[#00000033] border-e-[#00000033] border-y-[#00000033] items-center justify-center py-0 gap-[11px]"
        >
          <Image
            src="/icons/location.svg"
            width={20}
            height={20}
            alt="location"
            className="lg:hidden ml-[27px]"
          />
          <span
            className={cn(
              'w-full flex flex-col items-start justify-between lg:gap-y-[6px] py-[9px] px-[21px] ',
              'lg:py-[5px] min-[1180px]:py-3 lg:px-[10px] min-[1180px]:px-[21px]',
            )}
          >
            <P variant="P1" className="text-secondary">
              City
            </P>
            <P variant="P1" className="font-bold">
              {value
                ? frameworks.find((framework) => framework.value === value)?.label
                : 'New Delhi'}
            </P>
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === framework.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
