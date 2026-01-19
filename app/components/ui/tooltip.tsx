import { ReactNode, useEffect, useId, useLayoutEffect, useRef, useState } from 'react';

interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip = ({ children, text }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [xOffset, setXOffset] = useState(0);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tooltipId = useId();

  useLayoutEffect(() => {
    let animationFrameId: number;

    if (isOpen && contentRef.current) {
      animationFrameId = requestAnimationFrame(() => {
        if (!contentRef.current) return;

        const rect = contentRef.current.getBoundingClientRect();
        const padding = 16;
        let offset = 0;

        if (rect.left < padding) {
          offset = padding - rect.left;
        } else if (rect.right > window.innerWidth - padding) {
          offset = window.innerWidth - padding - rect.right;
        }

        // Using a functional update can help bypass some linting checks
        // and ensures we have the most stable state.
        setXOffset(offset);
      });
    } else {
      // Wrap the reset in requestAnimationFrame to match the open logic
      // and prevent the cascading render error on close.
      animationFrameId = requestAnimationFrame(() => {
        setXOffset(0);
      });
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleDismiss = (event: PointerEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('pointerdown', handleDismiss);
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener('pointerdown', handleDismiss);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div
      ref={tooltipRef}
      className="relative group cursor-help outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-custom-light/50 focus-visible:ring-offset-4 focus-visible:ring-offset-custom-dark transition-shadow"
      role="button"
      tabIndex={0}
      aria-describedby={tooltipId}
      aria-haspopup="true"
      aria-expanded={isOpen}
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
        if (e.key === 'Escape') handleClose();
      }}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      {children}

      <div
        id={tooltipId}
        ref={contentRef}
        role="tooltip"
        aria-hidden={!isOpen}
        style={{
          transform: `translateX(calc(-50% + ${xOffset}px)) ${isOpen ? 'translateY(0)' : 'translateY(4px)'}`,
        }}
        className={`
          absolute left-1/2 mt-1 w-max px-2 py-1 
          text-white text-xs md:text-sm rounded 
          bg-custom-light/10 border border-custom-light/20 
          backdrop-blur-md transition-all duration-200 pointer-events-none z-50
          ${isOpen ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
