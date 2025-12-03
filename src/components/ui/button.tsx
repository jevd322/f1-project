import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-4 py-2 font-medium transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        className ?? ''
      }`}
      {...props}
    />
  )
);
Button.displayName = 'Button';
