import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export const textVariants = cva('', {
  variants: {
    size: {
      sub1: 'text-xl',
      sub2: 'text-lg',
      p1: 'text-base',
      p2: 'text-sm',
      small: 'text-xs',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    tone: {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      black: 'text-black',
      brand: 'text-orange-700',
      colored: 'text-red-500',
      gray: 'text-gray-400',
    },
  },
  defaultVariants: {
    size: 'p1',
    weight: 'regular',
    tone: 'default',
  },
});

type TextSize = NonNullable<VariantProps<typeof textVariants>['size']>;

type TextWeight = NonNullable<VariantProps<typeof textVariants>['weight']>;

type TextTone = NonNullable<VariantProps<typeof textVariants>['tone']>;

type TextProps = {
  size?: TextSize;
  weight?: TextWeight;
  tone?: TextTone;
  as?: 'p' | 'span' | 'label' | 'strong';
} & HTMLAttributes<HTMLElement>;

export function Text({ size, weight, tone, as: Component = 'p', className, ...props }: TextProps) {
  return <Component className={cn(textVariants({ size, weight, tone }), className)} {...props} />;
}
