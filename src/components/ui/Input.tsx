import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

// Base input styles
const baseInputStyles = `
  w-full px-4 py-3 rounded-xl 
  border border-slate-200 
  focus:border-ci-blue focus:ring-2 focus:ring-ci-blue/20 
  transition-all outline-none
  placeholder:text-slate-400
  disabled:opacity-50 disabled:cursor-not-allowed
`;

// Dark variant (for gradient backgrounds)
const darkInputStyles = `
  w-full px-4 py-3 rounded-xl 
  bg-white/10 border border-white/20 
  focus:border-ci-yellow focus:ring-2 focus:ring-ci-yellow/20 
  transition-all outline-none
  placeholder-blue-200 text-white
  disabled:opacity-50 disabled:cursor-not-allowed
`;

// ============================================
// Text Input
// ============================================
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'light' | 'dark';
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, variant = 'light', className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s/g, '-');
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium mb-2',
              variant === 'dark' ? 'text-white' : 'text-slate-700'
            )}
          >
            {label}
            {props.required && ' *'}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            variant === 'dark' ? darkInputStyles : baseInputStyles,
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

// ============================================
// Textarea
// ============================================
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  variant?: 'light' | 'dark';
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, variant = 'light', className, id, rows = 4, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s/g, '-');
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={textareaId}
            className={cn(
              'block text-sm font-medium mb-2',
              variant === 'dark' ? 'text-white' : 'text-slate-700'
            )}
          >
            {label}
            {props.required && ' *'}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={cn(
            variant === 'dark' ? darkInputStyles : baseInputStyles,
            'resize-none',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

// ============================================
// Select
// ============================================
interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  variant?: 'light' | 'dark';
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, variant = 'light', options, placeholder, className, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s/g, '-');
    
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={selectId}
            className={cn(
              'block text-sm font-medium mb-2',
              variant === 'dark' ? 'text-white' : 'text-slate-700'
            )}
          >
            {label}
            {props.required && ' *'}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            variant === 'dark' ? darkInputStyles : baseInputStyles,
            'appearance-none bg-no-repeat bg-right pr-10',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: 'right 0.75rem center',
            backgroundSize: '1.25rem 1.25rem',
          }}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Input, Textarea, Select };
export type { InputProps, TextareaProps, SelectProps };
