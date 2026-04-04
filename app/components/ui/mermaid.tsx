import { motion } from 'framer-motion';
import mermaid from 'mermaid';
import { useEffect, useId, useState } from 'react';
import { useProject } from '~/features/work/context/project-context';

const smoothEase = [0.16, 1, 0.3, 1] as const;

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
  const { color } = useProject();
  const dotColor = color ?? '#f2f2f2';

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-75 gap-y-5">
      <div className="flex gap-x-2.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.15, 1, 0.15],
              scale: [0.8, 1.2, 0.8],
              boxShadow: [
                `0 0 0px ${dotColor}00`,
                `0 0 12px ${dotColor}80`,
                `0 0 0px ${dotColor}00`,
              ],
            }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut', delay: i * 0.25 }}
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: dotColor }}
          />
        ))}
      </div>
    </div>
  );
};

const DiagramError = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center w-full min-h-75 gap-y-3 text-center px-8">
    <div className="text-[10px] font-mono text-amber-400/60 uppercase tracking-[0.2em]">
      Diagram Error
    </div>
    <p className="text-custom-light/30 text-xs font-mono max-w-sm">{message}</p>
  </div>
);

export const Mermaid = ({ chart }: { chart: string }) => {
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string>('');
  const project = useProject();

  useEffect(() => {
    if (project.color) {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        securityLevel: 'loose',
        fontFamily: 'var(--font-mono, monospace)',
        themeVariables: {
          primaryColor: 'rgba(25, 25, 25, 0.8)',
          primaryTextColor: '#f2f2f2',
          primaryBorderColor: `${project.color}50`,
          lineColor: `${project.color}40`,
          secondaryColor: 'rgba(25, 25, 25, 0.8)',
          tertiaryColor: 'rgba(25, 25, 25, 0.8)',
        },
      });
    }
  }, [project.color]);

  const rawId = useId();

  const safeId = `mermaid-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`;

  useEffect(() => {
    let cancelled = false;

    const renderChart = async () => {
      try {
        const cleanChart = chart
          .replace(/```mermaid/gi, '')
          .replace(/```/g, '')
          .trim();

        if (!cleanChart) return;

        const { svg: renderedSvg } = await mermaid.render(safeId, cleanChart);
        if (!cancelled) {
          setSvg(renderedSvg);
          setError('');
        }
      } catch (err) {
        if (!cancelled) {
          console.error('Mermaid render error:', err);
          setError(err instanceof Error ? err.message : 'Failed to render diagram');
        }
      }
    };

    renderChart();
    return () => {
      cancelled = true;
    };
  }, [chart, safeId]);

  if (error) return <DiagramError message={error} />;
  if (!svg) return <DiagramLoader />;

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(4px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, ease: smoothEase }}
      className="mermaid-wrapper flex justify-center w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
