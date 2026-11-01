import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'

import { cn } from '@/shared/lib/cn'

const buttonVariants = cva(
  'inline-flex touch-manipulation items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-border)] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[var(--accent)] text-slate-900 hover:opacity-90',
        outline:
          'border border-[var(--border)] bg-transparent text-[var(--text-h)] hover:bg-[var(--accent-bg)]',
        ghost: 'text-[var(--text-h)] hover:bg-[var(--accent-bg)]',
      },
      size: {
        default: 'min-h-11 px-4 py-2 sm:min-h-9',
        sm: 'min-h-10 px-3 text-xs sm:min-h-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      type="button"
      {...props}
    />
  )
}
