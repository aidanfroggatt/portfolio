import { ReactNode, useEffect, useId, useRef, useState } from 'react';

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip = ({ children, text }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tooltipId = useId();

  useEffect(() => {
    if (!isOpen || !contentRef.current) return;

    // This is the most reliable way to measure an element in modern browsers
    const observer = new ResizeObserver(() => {
      if (!contentRef.current) return;

      const rect = contentRef.current.getBoundingClientRect();
      const padding = 16;
      let offset = 0;

      if (rect.left < padding) {
        offset = padding - rect.left;
      } else if (rect.right > window.innerWidth - padding) {
        offset = window.innerWidth - padding - rect.right;
      }

      contentRef.current.style.transform = `translateX(calc(-50% + ${offset}px)) translateY(0)`;
    });

    // Start observing the tooltip content the moment it becomes "visible"
    observer.observe(contentRef.current);

    const handleDismiss = (event: PointerEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => setIsOpen(false);

    document.addEventListener('pointerdown', handleDismiss);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      document.removeEventListener('pointerdown', handleDismiss);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <div
      ref={tooltipRef}
      className="relative group cursor-help outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-custom-light/50 focus-visible:ring-offset-4 focus-visible:ring-offset-custom-dark transition-shadow"
      role="button"
      tabIndex={0}
      aria-describedby={tooltipId}
      aria-haspopup="true"
      aria-expanded={isOpen}
      onClick={() => setIsOpen(true)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsOpen(true);
        }
        if (e.key === 'Escape') setIsOpen(false);
      }}
    >
      {children}

      <div
        id={tooltipId}
        ref={contentRef}
        role="tooltip"
        aria-hidden={!isOpen}
        style={{
          transform: 'translateX(-50%) translateY(4px)',
          willChange: 'transform, opacity',
        }}
        className={`
          absolute left-1/2 mt-2 w-max px-2 py-1 
          text-white text-xs md:text-sm rounded 
          bg-custom-light/10 border border-custom-light/20 
          backdrop-blur-md z-50
          transition-opacity duration-200 pointer-events-none
          ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
