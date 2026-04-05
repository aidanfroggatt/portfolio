import { motion, useInView } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import BlueprintGrid from '~/components/ui/grid';
import { useProject } from '~/features/work/context/project-context';

export const WorkTerminal = () => {
  const project = useProject();
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleLogs, setVisibleLogs] = useState<number>(0);

  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const { logs } = useMemo(() => {
    const lines = [];
    let successes = 0;

    lines.push({ text: '$ go run scripts/ig_migrate/main.go', type: 'cmd', delay: 800 });
    lines.push({ text: 'Initializing JSON-Driven Migration Engine...', type: 'sys', delay: 400 });
    lines.push({ text: 'Connecting to Neon Postgres... OK', type: 'sys', delay: 200 });
    lines.push({ text: 'Authenticating Backblaze B2... OK', type: 'sys', delay: 150 });
    lines.push({ text: 'Loaded 142 previously completed assets.', type: 'info', delay: 500 });
    lines.push({ text: 'Parsing manifest: posts_1.json...', type: 'sys', delay: 1000 });

    // Initial Burst
    for (let i = 0; i < 40; i++) {
      const year = 2019 + Math.floor(i / 12);
      const month = String((i % 12) + 1).padStart(2, '0');
      lines.push({
        text: `Vaulting [${year}-${month}-12T14:30:00Z] -> B2... Success`,
        type: 'success',
        delay: 20,
      });
      successes++;
    }

    lines.push({
      text: '[WARN] Found in JSON but missing on disk: ./ig_data/media/img_404.jpg',
      type: 'warn',
      delay: 800,
    });

    // Final Burst
    for (let i = 40; i < 115; i++) {
      const year = 2022 + Math.floor(i / 100);
      const month = String((i % 12) + 1).padStart(2, '0');
      lines.push({
        text: `Vaulting [${year}-${month}-04T11:20:00Z] -> B2... Success`,
        type: 'success',
        delay: 15,
      });
      successes++;
    }

    lines.push({ text: 'Saving progress...', type: 'sys', delay: 600 });
    // This now reflects the accurate count from the loops above
    lines.push({
      text: `Migration Complete! Successfully vaulted ${successes} new assets with precise metadata.`,
      type: 'final',
      delay: 0,
    });

    return { logs: lines, successCount: successes };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;

    const processNextLog = () => {
      if (currentIndex < logs.length) {
        setVisibleLogs(currentIndex + 1);
        const delay = logs[currentIndex].delay;
        currentIndex++;
        timeoutId = setTimeout(processNextLog, delay);
      }
    };

    timeoutId = setTimeout(processNextLog, 500);
    return () => clearTimeout(timeoutId);
  }, [isInView, logs]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLogs]);

  const getColor = (type: string) => {
    switch (type) {
      case 'cmd':
        return 'text-custom-light/40';
      case 'info':
        return 'text-blue-400/70';
      case 'success':
        return 'text-emerald-500/80';
      case 'warn':
        return 'text-amber-400/90';
      case 'final':
        return 'text-emerald-400 font-bold tracking-tight';
      default:
        return 'text-custom-light/70';
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      className="w-full my-12 group"
    >
      <div className="relative w-full bg-custom-dark-alt border border-custom-light/10 rounded-xl overflow-hidden shadow-2xl">
        <BlueprintGrid />

        {/* Minimal Header */}
        <div className="w-full border-b border-custom-light/5 bg-black/20 p-3 px-6 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-x-3">
            <div className="w-1.5 h-1.5 rounded-full bg-custom-light/20" />
            <span className="text-[10px] font-mono text-custom-light/30 uppercase tracking-[0.3em]">
              ig_migrate.sh
            </span>
          </div>
          {visibleLogs === logs.length && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[9px] font-mono text-emerald-500/50 uppercase tracking-widest"
            >
              Session Ended
            </motion.span>
          )}
        </div>

        {/* Terminal Surface */}
        <div className="relative h-[450px] overflow-hidden bg-black/40 backdrop-blur-sm">
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
            style={{
              background: `radial-gradient(circle at 50% 100%, ${project.color || '#ffffff'}, transparent 70%)`,
            }}
          />

          <div
            ref={scrollRef}
            className="absolute inset-0 p-8 flex flex-col gap-y-1.5 text-[11px] font-mono overflow-y-auto custom-scrollbar z-10 pb-16 scroll-smooth"
          >
            {logs.slice(0, visibleLogs).map((log, index) => (
              <div key={index} className="flex items-start gap-x-4 leading-relaxed">
                {index !== 0 && (
                  <span className="text-custom-light/10 shrink-0 select-none w-6 text-right">
                    {String(index).padStart(3, '0')}
                  </span>
                )}
                <span className={getColor(log.type)}>{log.text}</span>
              </div>
            ))}

            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className={`w-1.5 h-4 mt-0.5 ml-11 bg-custom-light/40 ${visibleLogs === logs.length ? 'hidden' : 'block'}`}
            />
          </div>

          {/* Top/Bottom Fade for Seamless Scroll */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-linear-to-b from-custom-dark-alt to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-custom-dark-alt/50 to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
};
