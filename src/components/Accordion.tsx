import React, { createContext, useContext, useState, ReactNode } from 'react';

type AccordionType = 'single' | 'multiple';

type AccordionContextValue = {
  type: AccordionType;
  openItems: string[];
  toggleItem: (value: string) => void;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

type AccordionProps = {
  children: ReactNode;
  type?: AccordionType;
  defaultValue?: string | string[];
  className?: string;
};

export function Accordion({ children, type = 'single', defaultValue, className = '' }: AccordionProps) {
  const initial: string[] = [];
  if (defaultValue) {
    if (Array.isArray(defaultValue)) initial.push(...defaultValue);
    else initial.push(defaultValue);
  }

  const [openItems, setOpenItems] = useState<string[]>(initial);

  function toggleItem(value: string) {
    setOpenItems((prev) => {
      const exists = prev.includes(value);
      if (type === 'single') {
        return exists ? [] : [value];
      }
      // multiple
      if (exists) return prev.filter((v) => v !== value);
      return [...prev, value];
    });
  }

  return (
    <AccordionContext.Provider value={{ type, openItems, toggleItem }}>
      <div className={`space-y-2 ${className}`}>{children}</div>
    </AccordionContext.Provider>
  );
}

type AccordionItemProps = {
  value: string;
  children: ReactNode;
  className?: string;
};

export function AccordionItem({ value, children, className = '' }: AccordionItemProps) {
  return (
    <div className={`border border-white/10 rounded bg-white/5 overflow-hidden ${className}`}>{children}</div>
  );
}

type AccordionTriggerProps = {
  value: string;
  children: ReactNode;
  className?: string;
};

export function AccordionTrigger({ value, children, className = '' }: AccordionTriggerProps) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error('AccordionTrigger must be used inside an Accordion');

  const open = ctx.openItems.includes(value);

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={`acc-content-${value}`}
      onClick={() => ctx.toggleItem(value)}
      className={`w-full px-4 py-3 text-left flex items-center justify-between gap-4 ${className}`}
    >
      <span className="text-gray-100 font-medium">{children}</span>
      <svg
        className={`w-4 h-4 text-gray-300 transform ${open ? 'rotate-180' : 'rotate-0'}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

type AccordionContentProps = {
  value: string;
  children: ReactNode;
  className?: string;
};

export function AccordionContent({ value, children, className = '' }: AccordionContentProps) {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error('AccordionContent must be used inside an Accordion');

  const open = ctx.openItems.includes(value);

  return (
    <div
      id={`acc-content-${value}`}
      role="region"
      aria-hidden={!open}
      className={`${open ? 'block' : 'hidden'} px-4 pb-4 pt-0 ${className}`}
    >
      <div className="text-gray-300">{children}</div>
    </div>
  );
}

export default Accordion;
