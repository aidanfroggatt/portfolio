import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Badge } from '~/components/ui/badge';
import { Asset } from '~/db/schema';
import WorkAsset from '~/features/work/components/asset';
import { useProject } from '~/features/work/context/project-context';
import { smoothEase } from '~/features/work/utils/animation';

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
