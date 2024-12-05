import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes, forwardRef } from 'react'

const className = {
  P1: 'text-[12px] leading-[15.12px] md:text-[16px] md:leading-[20.16px]',
  P2: 'text-[13px] leading-[24.78px]',
  P3: 'text-[12px] leading-[14.63px]',
}

const variantsFn = cva('font-outfit text-black', {
  variants: {
    variant: className,
  },
  defaultVariants: {
    variant: 'P1',
  },
})

interface PProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof variantsFn> {}

export const P = forwardRef<HTMLParagraphElement, PProps>(
  ({ className, variant, ...props }, ref) => (
    <p ref={ref} {...props} className={cn(variantsFn({ variant, className }))} />
  ),
)

P.displayName = 'P'
