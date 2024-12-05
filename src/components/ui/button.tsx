import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'background-default text-white font-medium rounded-md hover:bg-none hover:text-black border-[1px] hover:border-s-[#F6A23D] hover:border-e-[#EC5934] hover:border-y-[#EC5934] duration-100',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-[1px] border-s-[#F6A23D] border-e-[#EC5934] border-y-[#EC5934] text-black font-medium rounded-md hover:text-white duration-100',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'bg-[#D9D9D980] rounded-md',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'py-2 md:py-3 px-3 md:px-[21px]',
        sm: 'py-[3px] px-[7px] md:py-[7px] md:pl-[13px] md:pr-2',
        lg: 'lg:pl-[23px] lg:pr-[20px] p-[6px] lg:py-4',
        exLg: 'py-4 lg:py-6 px-[35px]',
        icon: 'px-6 lg:px-[54px] py-2 lg:py-[18px]',
        filterSearch: 'p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
