import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import BlueprintGrid from '~/components/ui/grid';
import { useProject } from '~/features/work/context/project-context';
import { smoothEase } from '~/features/work/utils/animation';

export const WorkRetrospective = ({ title, children }: { title?: string; children: ReactNode }) => {
  const project = useProject();
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: smoothEase }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-6 md:gap-12 p-8 md:p-12 rounded-2xl bg-custom-dark-alt border border-custom-light/10 relative overflow-hidden w-full shadow-2xl"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
        className="absolute -top-[50%] -right-[10%] w-[120%] h-[150%] opacity-[0.15] pointer-events-none mix-blend-screen"
        style={{
          background: `conic-gradient(from 90deg, transparent 0%, ${project.color || '#fff'} 50%, transparent 100%)`,
          filter: 'blur(40px)', // Halve the blur, or remove it entirely on mobile
          willChange: 'transform', // Forces the GPU to composite this layer separately
          transform: 'translateZ(0)', // Additional hardware acceleration trigger
        }}
      />
      <BlueprintGrid />
      <div className="md:w-1/3 shrink-0 flex flex-col gap-y-4 relative z-10">
        <div className="flex items-center gap-x-3">
          <div
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: project.color || '#fff',
              boxShadow: `0 0 8px ${project.color || '#fff'}60`,
            }}
          />
          <span className="text-[10px] font-mono text-custom-light/40 uppercase tracking-[0.2em]">
            Retrospective
          </span>
        </div>
        {title && <h4 className="text-xl md:text-2xl font-medium text-shadow">{title}</h4>}
      </div>
      <div className="md:w-2/3 text-custom-light/70 text-base md:text-lg leading-relaxed font-light relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
