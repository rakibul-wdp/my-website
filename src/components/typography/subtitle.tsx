import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes, forwardRef } from 'react'

const className = {
  H4: 'text-[14px] leading-[17.64px] md:text-[24px] md:leading-[30.24px]',
  H5: 'text-[14px] leading-[17.64px] md:text-[22px] md:leading-[27.72px]',
}

const variantsFn = cva('font-outfit font-bold text-black', {
  variants: {
    variant: className,
  },
  defaultVariants: {
    variant: 'H4',
  },
})

interface SubTitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof variantsFn> {}

export const SubTitle = forwardRef<HTMLHeadingElement, SubTitleProps>(
  ({ className, variant = 'H4', ...props }, ref) => {
    const allProps = {
      ref: ref,
      ...props,
      className: cn(variantsFn({ variant, className })),
    }
    switch (variant) {
      case 'H4':
        return <h4 {...allProps} />
      case 'H5':
        return <h4 {...allProps} />

      default:
        return <h4 {...allProps} />
    }
  },
)

SubTitle.displayName = 'SubTitle'
