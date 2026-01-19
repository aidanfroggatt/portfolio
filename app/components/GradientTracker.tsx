import { useEffect, useRef } from 'react';
import '~/global.css';

const GradientTracker = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const gradientBackground = container.querySelector('.bg-gradient') as HTMLElement;

    const handleMouseEnter = () => {
      if (gradientBackground) {
        gradientBackground.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      if (gradientBackground) {
        gradientBackground.style.opacity = '0';
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty('--mouse-x', `${x}px`);
      container.style.setProperty('--mouse-y', `${y}px`);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`gradient-tracker-container absolute inset-0 overflow-hidden ${className}`}
      data-gradient-tracker
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient" />
    </div>
  );
};

export default GradientTracker;
