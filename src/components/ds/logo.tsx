import { cva, type VariantProps } from 'class-variance-authority';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import logo from '../images/logo.png';

const logoVariants = cva('', {
  variants: {
    size: {
      sm: 'w-[60px] h-[60px]',
      lg: 'w-[135px] h-[119px]',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

const sizeMap = {
  sm: { width: 60, height: 60 },
  lg: { width: 135, height: 119 },
};

type LogoProps = VariantProps<typeof logoVariants> & {
  className?: string;
  size: 'sm' | 'lg';
};

export function Logo({ size = 'sm', className }: LogoProps) {
  const { width, height } = sizeMap[size];

  return (
    <div className={cn(logoVariants({ size }), className)}>
      <Image src={logo} alt="Logo da aplicação" width={width} height={height} className="object-contain" priority />
    </div>
  );
}
