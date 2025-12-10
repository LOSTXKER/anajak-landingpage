import { type LucideIcon } from 'lucide-react';
import Badge, { type BadgeVariant } from './Badge';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  badgeVariant?: BadgeVariant;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  badgeIcon,
  badgeVariant = 'primary',
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-16', className)}>
      {badge && (
        <Badge variant={badgeVariant} icon={badgeIcon} className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p 
          className={cn(
            'section-subtitle',
            centered ? 'mx-auto' : ''
          )}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
    </div>
  );
}

export type { SectionHeaderProps };
