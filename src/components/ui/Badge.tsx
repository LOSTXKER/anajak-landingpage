import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';

const variants = {
  default: 'bg-slate-100 text-slate-700',
  primary: 'bg-blue-50 text-ci-blue',
  secondary: 'bg-slate-100 text-slate-600',
  success: 'bg-green-50 text-green-600',
  warning: 'bg-yellow-50 text-yellow-600',
  danger: 'bg-red-50 text-red-600',
  purple: 'bg-purple-50 text-purple-600',
  orange: 'bg-orange-50 text-orange-600',
  indigo: 'bg-indigo-50 text-indigo-600',
} as const;

type Variant = keyof typeof variants;

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
  icon?: LucideIcon;
  className?: string;
  children: React.ReactNode;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', icon: Icon, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold',
          variants[variant],
          className
        )}
        {...props}
      >
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export default Badge;
export type { BadgeProps, Variant as BadgeVariant };
