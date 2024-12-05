import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes, forwardRef } from 'react'

const className = {
  H1: 'text-[34px] leading-[42.84px] md:text-5xl lg:text-6xl xl:text-[64px] xl:leading-[80.84px]',
  H2: 'text-[22px] leading-[27.72px] md:text-3xl lg:text-4xl xl:text-[46px] xl:leading-[57.96px]',
  H3: 'text-[14px] leading-[17.34px] md:text-[36px] md:leading-[45.36px]',
}

const variantsFn = cva('font-outfit font-bold text-black', {
  variants: {
    variant: className,
  },
  defaultVariants: {
    variant: 'H1',
  },
})

interface TitleProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof variantsFn> {}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, variant = 'H1', ...props }, ref) => {
    const allProps = {
      ref: ref,
      ...props,
      className: cn(variantsFn({ variant, className })),
    }

    switch (variant) {
      case 'H1':
        return <h1 {...allProps} />
      case 'H2':
        return <h1 {...allProps} />
      case 'H3':
        return <h1 {...allProps} />

      default:
        return <h1 {...allProps} />
    }
  },
)

Title.displayName = 'Title'
