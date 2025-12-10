import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';

const colorVariants = {
  blue: 'bg-blue-100 text-blue-600',
  purple: 'bg-purple-100 text-purple-600',
  orange: 'bg-orange-100 text-orange-600',
  green: 'bg-green-100 text-green-600',
  red: 'bg-red-100 text-red-600',
  indigo: 'bg-indigo-100 text-indigo-600',
  yellow: 'bg-yellow-100 text-yellow-600',
  slate: 'bg-slate-100 text-slate-600',
  white: 'bg-white/10 text-white',
} as const;

const sizes = {
  sm: 'w-10 h-10',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20',
};

const iconSizes = {
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10',
};

type ColorVariant = keyof typeof colorVariants;
type Size = keyof typeof sizes;

interface IconBoxProps extends HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  color?: ColorVariant;
  size?: Size;
  rounded?: 'lg' | 'xl' | '2xl' | 'full';
  className?: string;
}

const IconBox = forwardRef<HTMLDivElement, IconBoxProps>(
  ({ icon: Icon, color = 'blue', size = 'md', rounded = 'xl', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-center shrink-0',
          colorVariants[color],
          sizes[size],
          `rounded-${rounded}`,
          className
        )}
        {...props}
      >
        <Icon className={iconSizes[size]} />
      </div>
    );
  }
);

IconBox.displayName = 'IconBox';

export default IconBox;
export type { IconBoxProps, ColorVariant as IconBoxColor, Size as IconBoxSize };
