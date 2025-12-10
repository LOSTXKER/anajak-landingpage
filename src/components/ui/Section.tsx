import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

const backgrounds = {
  white: 'bg-white',
  light: 'bg-slate-50',
  dark: 'bg-slate-900 text-white',
  gradient: 'gradient-bg text-white',
  'blue-light': 'bg-gradient-to-b from-blue-50 to-white',
  'purple-light': 'bg-gradient-to-b from-purple-50 to-white',
} as const;

const paddingSizes = {
  none: '',
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-24',
  xl: 'py-32',
};

type Background = keyof typeof backgrounds;
type Padding = keyof typeof paddingSizes;

interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: Background;
  padding?: Padding;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  noContainer?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ 
    background = 'white', 
    padding = 'lg',
    containerSize = 'xl',
    noContainer = false,
    className, 
    children, 
    ...props 
  }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          backgrounds[background],
          paddingSizes[padding],
          className
        )}
        {...props}
      >
        {noContainer ? (
          children
        ) : (
          <Container size={containerSize}>
            {children}
          </Container>
        )}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
export type { SectionProps };
