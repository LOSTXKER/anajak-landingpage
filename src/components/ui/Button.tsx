import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Variant styles
const variants = {
  primary: 'bg-ci-blue text-white hover:bg-ci-blueDark shadow-ci-blue/25',
  secondary: 'bg-white text-slate-700 border-2 border-slate-200 hover:border-ci-blue hover:text-ci-blue',
  ghost: 'text-slate-600 hover:text-ci-blue hover:bg-blue-50',
  danger: 'bg-red-600 text-white hover:bg-red-700 shadow-red-600/25',
  success: 'bg-green-600 text-white hover:bg-green-700 shadow-green-600/25',
} as const;

// Size styles
const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg',
} as const;

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

interface BaseButtonProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

// For button element
type ButtonAsButton = BaseButtonProps & 
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    href?: never;
  };

// For anchor element (external links)
type ButtonAsAnchor = BaseButtonProps & 
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    as: 'a';
    href: string;
  };

// For Next.js Link
type ButtonAsLink = BaseButtonProps & {
  as: 'link';
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

const baseStyles = `
  inline-flex items-center justify-center gap-2 
  rounded-xl font-bold 
  hover:-translate-y-0.5 hover:shadow-lg 
  transition-all duration-300
  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
`;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className,
      children,
      ...rest
    } = props;

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      className
    );

    // Render as Next.js Link
    if (props.as === 'link') {
      const { href, as: _, ...linkProps } = props;
      return (
        <Link href={href} className={classes} {...(linkProps as Record<string, unknown>)}>
          {children}
        </Link>
      );
    }

    // Render as anchor tag
    if (props.as === 'a') {
      const { href, as: _, ...anchorProps } = props;
      return (
        <a 
          ref={ref as React.Ref<HTMLAnchorElement>} 
          href={href} 
          className={classes} 
          {...(anchorProps as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    // Render as button (default)
    const { as: _, ...buttonProps } = rest as ButtonAsButton;
    return (
      <button 
        ref={ref as React.Ref<HTMLButtonElement>} 
        className={classes} 
        {...(buttonProps as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
export type { ButtonProps, Variant as ButtonVariant, Size as ButtonSize };
