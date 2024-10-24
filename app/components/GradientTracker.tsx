import { useEffect } from 'react';
import '~/styles/gradient-tracker.css';

const GradientTracker = ({ className }: { className?: string }) => {
  useEffect(() => {
    const gradientElements = document.querySelectorAll('[data-gradient-tracker]');

    gradientElements.forEach((gradientElement) => {
      const gradientBackground = gradientElement.querySelector('.bg-gradient') as HTMLElement;

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
        const rect = gradientElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (gradientElement as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (gradientElement as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      };

      gradientElement.addEventListener('mouseenter', handleMouseEnter);
      gradientElement.addEventListener('mouseleave', handleMouseLeave);
      gradientElement.addEventListener('mousemove', handleMouseMove as EventListener);

      // Cleanup event listeners when the component unmounts
      return () => {
        gradientElement.removeEventListener('mouseenter', handleMouseEnter);
        gradientElement.removeEventListener('mouseleave', handleMouseLeave);
        gradientElement.removeEventListener('mousemove', handleMouseMove as EventListener);
      };
    });
  }, []); // Empty dependency array to run once on mount

  return (
    <div className={`gradient-tracker-container absolute inset-0 overflow-hidden ${className}`} data-gradient-tracker>
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient" />
    </div>
  );
};

export default GradientTracker;
