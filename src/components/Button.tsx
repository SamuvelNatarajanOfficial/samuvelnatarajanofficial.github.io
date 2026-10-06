import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  size?: 'md' | 'sm'
  icon?: ReactNode
  external?: boolean
}

const variants: Record<Variant, string> = {
  primary: 'bg-sky-500 text-slate-950 hover:bg-sky-400 border border-sky-500',
  secondary: 'bg-slate-900 text-slate-100 border border-slate-700 hover:border-slate-500 hover:bg-slate-800',
  ghost: 'text-slate-300 border border-transparent hover:text-white hover:bg-slate-800/60',
}

export function Button({
  variant = 'primary',
  size = 'md',
  icon,
  external,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const sizing = size === 'sm' ? 'px-3.5 py-2 text-sm' : 'px-5 py-3 text-sm sm:text-base'
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 ${sizing} ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {icon}
      {children}
    </a>
  )
}
