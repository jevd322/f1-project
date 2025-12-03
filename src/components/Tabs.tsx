import React, { useState, ReactNode } from 'react';

type TabsProps = {
  tabs: { value: string; label: string; content: ReactNode }[];
  defaultValue?: string;
  className?: string;
};

export function Tabs({ tabs, defaultValue, className = '' }: TabsProps) {
  const [active, setActive] = useState(defaultValue ?? tabs[0]?.value);
  return (
    <div className={className}>
      <div className="flex gap-2 w-fit border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            className={`px-4 py-2 font-medium rounded-t transition-colors duration-150 focus:outline-none ${
              active === tab.value
                ? 'bg-white text-indigo-700 border-b-2 border-indigo-500'
                : 'bg-gray-100 text-gray-500 hover:text-indigo-700'
            }`}
            onClick={() => setActive(tab.value)}
            aria-selected={active === tab.value}
            aria-controls={`tab-panel-${tab.value}`}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.value}
            id={`tab-panel-${tab.value}`}
            role="tabpanel"
            hidden={active !== tab.value}
            className="py-4 h-[8rem] bg-white/80  shadow"
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
