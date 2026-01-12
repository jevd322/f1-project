import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div className={`border bg-card text-card-foreground shadow ${className ?? ''}`} {...props} />
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={`flex flex-col space-y-1.5 p-6 pb-2 ${className ?? ''}`} {...props} />;
}

export function CardHeaderGfx({ className, ...props }: CardProps) {
  return <div className={`flex flex-row gap-4 p-2 ${className ?? ''}`} {...props} />;
}

export function CardTitle({ className, ...props }: CardProps) {
  return (
    <h3 className={`font-semibold leading-none tracking-tight ${className ?? ''}`} {...props} />
  );
}

export function CardDescription({ className, ...props }: CardProps) {
  return <p className={`text-sm text-muted-foreground ${className ?? ''}`} {...props} />;
}

export function CardDescriptionGfx({ className, ...props }: CardProps) {
  return (
    <p className={`flex justify-items-end text-2xl font-bold ${className ?? ''}`} {...props} />
  );
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={`p-6 pt-0 ${className ?? ''}`} {...props} />;
}

export function CardContentGfx({ className, ...props }: CardProps) {
  return (
    <div
      className={`p-4 pb-2 pr-12 pl-8 flex flex-row justify-between ${className ?? ''}`}
      {...props}
    />
  );
}

export function CardFooter({ className, ...props }: CardProps) {
  return <div className={`flex items-center p-6 pt-0 ${className ?? ''}`} {...props} />;
}
export function CardFooterGfx({ className, ...props }: CardProps) {
  return <div className={`flex items-center  pt-0 ${className ?? ''}`} {...props} />;
}
