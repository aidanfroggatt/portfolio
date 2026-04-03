import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion';
import { MouseEvent, ReactNode, useRef } from 'react';
import { Badge } from '~/components/ui/badge';
import Dot from '~/components/ui/dot';
import BlueprintGrid from '~/components/ui/grid';
import type { Asset } from '~/db/schema';
import WorkAsset from '~/features/work/components/asset';
import { useProject } from '~/features/work/context/project-context';
import { cn } from '~/lib/utils';

const smoothEase = [0.16, 1, 0.3, 1];

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

export const WorkAssetBlock = ({
  publicId,
  resourceType,
  alt,
}: {
  publicId: Asset['publicId'];
  resourceType: Asset['resourceType'];
  alt: Asset['alt'];
}) => {
  const project = useProject();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: smoothEase }}
      viewport={{ once: true }}
      className="relative w-full flex flex-col items-center group"
    >
      <WorkAsset publicId={publicId} resourceType={resourceType} alt={alt} color={project.color} />
      <h5 className="flex flex-row w-full justify-end items-center gap-x-3 mt-3 text-end text-custom-light/50 transition-opacity duration-300">
        <span className="text-[10px] uppercase tracking-wider opacity-70">{alt}</span>
        <Badge variant="secondary" className="uppercase text-[9px] tracking-[0.15em] font-bold">
          {resourceType === 'pdf' || publicId.endsWith('.pdf') ? 'PDF' : resourceType}
        </Badge>
      </h5>
    </motion.div>
  );
};

export const WorkAssetGallery = ({ children }: { children: ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full my-6">{children}</div>
);

export const WorkCallout = ({ title, children }: { title?: string; children: ReactNode }) => {
  const project = useProject();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
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
      <div className="absolute left-[15px] top-6 bottom-0 w-[1px] bg-custom-light/5 overflow-hidden z-0 rounded-full">
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[2px] h-[120px] flex flex-col justify-end"
          style={{
            top: beamTop,
            opacity: beamOpacity,
            translateY: '-100%',
            background: `linear-gradient(to top, ${color}, transparent)`,
          }}
        >
          <div
            className="w-[4px] h-[16px] rounded-full self-center"
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

export const WorkInsight = ({ title, children }: { title?: string; children: ReactNode }) => {
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
          filter: 'blur(80px)',
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

export const WorkDiagramWrapper = ({
  children,
  caption,
  type,
}: {
  children: ReactNode;
  caption?: string;
  type?: string;
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
      {caption && (
        <div className="flex flex-row w-full justify-between items-center mt-4 px-1">
          <h5 className="flex flex-row w-full justify-end items-center gap-x-2 text-end text-custom-light/50">
            {caption}
            <Badge variant="secondary" className="uppercase text-[10px] tracking-wider">
              {type?.toUpperCase() ?? 'DIAGRAM'}
            </Badge>
          </h5>
        </div>
      )}
    </motion.div>
  );
};
