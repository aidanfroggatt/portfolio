import mermaid from 'mermaid';
import { useEffect, useRef } from 'react';

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'Montserrat',
  themeVariables: {
    primaryColor: '#191919',
    primaryTextColor: '#f2f2f2',
    lineColor: 'rgba(255,255,255,0.2)',
  },
});

export const Mermaid = ({ chart }: { chart: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div className="mermaid flex justify-center w-full" ref={ref}>
      {chart}
    </div>
  );
};
