import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Badge } from '~/components/ui/badge';
import BlueprintGrid from '~/components/ui/grid';
import { smoothEase } from '~/features/work/utils/animation';

export const WorkDiagramWrapper = ({
  children,
  caption,
  type = 'Diagram',
}: {
  children: ReactNode;
  caption: string;
  type: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: smoothEase }}
      viewport={{ once: true }}
      className="flex flex-col w-full my-12 group"
    >
      <div className="relative w-full bg-custom-dark-alt border border-custom-light/10 rounded-xl p-6 md:p-12 overflow-x-auto custom-scrollbar shadow-inner">
        <BlueprintGrid />

        <div className="min-w-175 flex justify-center pointer-events-none relative z-10">
          {children}
        </div>
      </div>
      <div className="flex flex-row w-full justify-between items-center mt-4 px-1">
        <h5 className="flex flex-row w-full justify-end items-center gap-x-2 text-end text-custom-light/50">
          {caption ?? ''}
          <Badge variant="secondary" className="uppercase text-[10px] tracking-wider">
            {type?.toUpperCase()}
          </Badge>
        </h5>
      </div>
    </motion.div>
  );
};
