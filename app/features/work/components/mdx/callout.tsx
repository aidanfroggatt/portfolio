import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent, ReactNode } from 'react';
import { useProject } from '~/features/work/context/project-context';
import { smoothEase } from '~/features/work/utils/animation';

export const WorkCallout = ({ title, children }: { title?: string; children: ReactNode }) => {
  const project = useProject();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;

    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: smoothEase }}
      viewport={{ once: true }}
      className="relative flex flex-col gap-y-3 p-8 bg-custom-dark-alt border border-custom-light/10 rounded-xl w-full my-8 overflow-hidden group shadow-lg"
      onMouseMove={handleMouseMove}
      style={{
        borderTopColor: project.color ? `${project.color}80` : undefined,
        borderTopWidth: project.color ? '2px' : '1px',
      }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, ${project.color || 'rgba(255,255,255)'}10, transparent 80%)`,
        }}
      />
      {title && (
        <div className="text-[10px] font-mono text-custom-light/40 uppercase tracking-[0.2em] relative z-10">
          {title}
        </div>
      )}
      <div className="text-custom-light/80 text-lg md:text-xl font-accent italic leading-relaxed relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
