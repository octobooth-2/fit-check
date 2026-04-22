import type { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  className = '',
  variant = 'primary',
  ...props
}: Props) => (
  <button
    className={`rounded-md px-4 py-2 text-sm font-medium transition ${
      variant === 'primary'
        ? 'bg-slate-900 text-white hover:bg-slate-700'
        : 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50'
    } ${className}`}
    {...props}
  />
)
