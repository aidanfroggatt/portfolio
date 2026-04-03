import { motion } from 'framer-motion';
import mermaid from 'mermaid';
import { useEffect, useId, useState } from 'react';

mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  securityLevel: 'loose',
  fontFamily: 'var(--font-mono, monospace)',
  themeVariables: {
    primaryColor: 'rgba(25, 25, 25, 0.8)',
    primaryTextColor: '#f2f2f2',
    primaryBorderColor: 'rgba(255, 255, 255, 0.2)',
    lineColor: 'rgba(255, 255, 255, 0.25)',
    secondaryColor: 'rgba(25, 25, 25, 0.8)',
    tertiaryColor: 'rgba(25, 25, 25, 0.8)',
  },
});

const DiagramLoader = () => {
  const color = '#f2f2f2';

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-75 gap-y-5">
      <div className="flex gap-x-2.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.15, 1, 0.15],
              scale: [0.8, 1.2, 0.8],
              boxShadow: [`0 0 0px ${color}00`, `0 0 12px ${color}80`, `0 0 0px ${color}00`],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut',
              delay: i * 0.25,
            }}
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export const Mermaid = ({ chart }: { chart: string }) => {
  const [svg, setSvg] = useState<string>('');

  const rawId = useId();
  const safeId = `mermaid-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`;

  useEffect(() => {
    const renderChart = async () => {
      try {
        const cleanChart = chart
          .replace(/```mermaid/gi, '')
          .replace(/```/g, '')
          .trim();

        const { svg: renderedSvg } = await mermaid.render(safeId, cleanChart);
        setSvg(renderedSvg);
      } catch (error) {
        console.error('Mermaid render error:', error);
      }
    };

    renderChart();
  }, [chart, safeId]);

  if (!svg) return <DiagramLoader />;

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(4px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="mermaid-wrapper flex justify-center w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
