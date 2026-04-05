import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { useProject } from '~/features/work/context/project-context';

export const WorkEvolution = ({
  contextHeading,
  context,
  evolutionHeading,
  evolution,
}: {
  contextHeading?: string;
  context: ReactNode;
  evolutionHeading?: string;
  evolution: ReactNode;
}) => {
  const project = useProject();
  const color = project.color || '#ffffff';

  const containerRef = useRef<HTMLDivElement>(null);
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress: trackProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const beamTop = useTransform(trackProgress, [0, 1], ['0%', '110%']);
  const beamOpacity = useTransform(trackProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  const { scrollYProgress: node1Progress } = useScroll({
    target: node1Ref,
    offset: ['start center', 'end center'],
  });

  const { scrollYProgress: node2Progress } = useScroll({
    target: node2Ref,
    offset: ['start center', 'end center'],
  });

  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <div ref={containerRef} className="flex flex-col w-full my-12 relative max-w-5xl">
      <div className="absolute left-mac-window-dot-2xl top-6 bottom-0 w-px bg-custom-light/5 overflow-hidden z-0 rounded-full">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-0.5 h-30 flex flex-col justify-end"
          style={{
            top: beamTop,
            opacity: beamOpacity,
            translateY: '-100%',
            background: `linear-gradient(to top, ${color}, transparent)`,
          }}
        >
          <div
            className="w-[4px] h-4 rounded-full self-center"
            style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}` }}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: smoothEase }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10 w-full mb-16 md:mb-24"
      >
        <div className="flex flex-row items-start gap-x-6 md:gap-x-8 md:w-1/3 shrink-0">
          <div
            ref={node1Ref}
            className="w-8 h-8 rounded-full bg-custom-dark-alt flex items-center justify-center shrink-0 mt-1 relative z-10 shadow-sm"
          >
            <div className="absolute inset-0 rounded-full border border-custom-light/5" />

            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <motion.circle
                cx="16"
                cy="16"
                r="15"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1.5"
                style={{ pathLength: node1Progress }}
              />
            </svg>

            <motion.div
              className="w-1.5 h-1.5 rounded-full relative z-10 bg-custom-light/50"
              style={{
                scale: useTransform(node1Progress, [0, 1], [0.5, 1]),
                opacity: useTransform(node1Progress, [0, 1], [0.3, 1]),
              }}
            />
          </div>
          <div className="flex flex-col pt-1.5">
            <span className="text-xl md:text-2xl font-medium leading-tight text-custom-light/90">
              {contextHeading}
            </span>
          </div>
        </div>
        <div className="md:w-2/3 text-custom-light/60 text-base md:text-lg leading-relaxed font-light pl-14 md:pl-0 pt-1.5">
          {context}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: smoothEase }}
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col md:flex-row gap-6 md:gap-12 relative z-10 w-full"
      >
        <div className="flex flex-row items-start gap-x-6 md:gap-x-8 md:w-1/3 shrink-0">
          <div
            ref={node2Ref}
            className="w-8 h-8 rounded-full bg-custom-dark-alt flex items-center justify-center shrink-0 mt-1 relative z-10 shadow-lg"
          >
            <div className="absolute inset-0 rounded-full border border-custom-light/5" />

            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <motion.circle
                cx="16"
                cy="16"
                r="15"
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                style={{ pathLength: node2Progress }}
              />
            </svg>

            <motion.div
              className="w-2 h-2 rounded-full relative z-10"
              style={{
                backgroundColor: color,
                scale: useTransform(node2Progress, [0, 1], [0.5, 1]),
                opacity: useTransform(node2Progress, [0, 1], [0.3, 1]),
                boxShadow: useTransform(node2Progress, (v) => `0 0 ${v * 10}px ${color}80`),
              }}
            />
          </div>
          <div className="flex flex-col pt-1.5">
            <span
              className="text-xl md:text-2xl font-medium leading-tight text-custom-light/90"
              style={{ textShadow: `0 0 15px ${color}30` }}
            >
              {evolutionHeading}
            </span>
          </div>
        </div>
        <div className="md:w-2/3 text-custom-light/80 text-base md:text-lg leading-relaxed font-light pl-14 md:pl-0 pt-1.5">
          {evolution}
        </div>
      </motion.div>
    </div>
  );
};
