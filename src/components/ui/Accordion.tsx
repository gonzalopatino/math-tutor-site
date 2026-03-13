import { useState, useId } from 'react';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export default function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const accordionId = useId();

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) {
          next.clear();
        }
        next.add(id);
      }
      return next;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleItem(id);
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        const buttonId = `${accordionId}-button-${item.id}`;
        const panelId = `${accordionId}-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className="rounded-lg bg-primary-800 border border-primary-700/50 overflow-hidden"
          >
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-primary-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
              onClick={() => toggleItem(item.id)}
              onKeyDown={(e) => handleKeyDown(e, item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="text-base font-medium text-neutral-100 pr-4">
                {item.question}
              </span>
              <svg
                className={`h-5 w-5 flex-shrink-0 text-accent transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`transition-all duration-200 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="px-6 pb-4 text-neutral-300">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
