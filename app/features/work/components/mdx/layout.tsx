import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Dot } from 'recharts';
import { smoothEase } from '~/features/work/utils/animation';
import { cn } from '~/lib/utils';

export const WorkSection = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <section
    className={cn(
      'border-t border-custom-light/10 py-12 md:py-24 flex flex-col gap-y-12 md:gap-y-20 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl mx-auto',
      className
    )}
  >
    {children}
  </section>
);

export const WorkHeader = ({ type, title }: { type: string; title: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: smoothEase }}
      viewport={{ once: true, margin: '-50px' }}
      className="flex flex-col gap-y-2"
    >
      <div className="flex flex-row justify-start items-center gap-x-4">
        <Dot />
        <div className="text-xs 2xl:text-sm text-custom-light/50 py-4 2xl:py-8">{type}</div>
      </div>
      {title && <h2 className="text-shadow-mobile md:text-shadow">{title}</h2>}
    </motion.div>
  );
};

export const WorkSplitContent = ({
  subtitle,
  children,
}: {
  subtitle: ReactNode;
  children: ReactNode;
}) => (
  <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-20 gap-y-6 md:gap-y-12 justify-start items-start w-full">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: smoothEase }}
      viewport={{ once: true }}
    >
      {typeof subtitle === 'string' ? (
        <h4 className="text-xl md:text-2xl font-medium text-custom-light/90">{subtitle}</h4>
      ) : (
        subtitle
      )}
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: smoothEase, delay: 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-start justify-start gap-y-6 text-base 2xl:text-lg text-custom-light/60 leading-relaxed font-light"
    >
      {children}
    </motion.div>
  </div>
);

export const WorkProse = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: smoothEase }}
    viewport={{ once: true }}
    className="max-w-4xl text-base 2xl:text-lg text-custom-light/60 leading-relaxed space-y-8 font-light"
  >
    {children}
  </motion.div>
);

export const WorkSubSection = ({ title, children }: { title?: string; children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: smoothEase }}
    viewport={{ once: true }}
    className="flex flex-col gap-y-4 w-full"
  >
    {title && <h4 className="text-xl md:text-2xl font-medium text-custom-light/90">{title}</h4>}
    <div className="flex flex-col gap-y-4 text-base 2xl:text-lg text-custom-light/60 leading-relaxed font-light">
      {children}
    </div>
  </motion.div>
);
