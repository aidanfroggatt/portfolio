import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useProject } from '~/features/work/context/project-context';
import { smoothEase } from '~/features/work/utils/animation';

export const WorkFeatureList = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col w-full border-t border-dashed border-custom-light/20 my-8">
    {children}
  </div>
);

export const WorkFeature = ({ title, children }: { title: string; children: ReactNode }) => {
  const project = useProject();
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: smoothEase }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-2 md:gap-12 border-b border-dashed border-custom-light/20 py-6 md:py-8 items-start group hover:bg-custom-light/2 transition-colors duration-300 px-4 -mx-4 rounded-sm"
    >
      <div className="md:w-1/3 shrink-0 flex items-center gap-x-3 pt-1">
        <div
          className="w-1.5 h-1.5 rounded-full opacity-30 group-hover:opacity-100 transition-all duration-300"
          style={{ backgroundColor: project.color || '#f2f2f2' }}
        />
        <h5 className="font-mono text-xs md:text-sm tracking-widest uppercase text-custom-light/70 group-hover:text-custom-light/90 transition-colors duration-300">
          {title}
        </h5>
      </div>
      <div className="text-custom-light/60 text-base 2xl:text-lg font-light md:w-2/3 leading-relaxed group-hover:text-custom-light/80 transition-colors duration-300">
        {children}
      </div>
    </motion.div>
  );
};
