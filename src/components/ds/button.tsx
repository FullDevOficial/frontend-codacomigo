import type { ComponentProps, ReactNode } from 'react';
import { forwardRef } from 'react';

import { Button as UIButton } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ButtonProps = {
  icon?: ReactNode;
  label?: string;
} & ComponentProps<typeof UIButton>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, icon, label, children, ...props }, ref) => {
  return (
    <UIButton ref={ref} className={cn(className)} {...props}>
      {icon}
      {children ?? label}
    </UIButton>
  );
});

Button.displayName = 'Button';

export { Button };
