import { Link } from '@remix-run/react';
import { CSSProperties, ReactNode } from 'react';
import { FaMountainSun } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import WorkAsset from '~/components/work/asset';
import { useProject } from '~/contexts/project-context';
import type { Asset } from '~/db/schema';
import { getLinkIcon } from '~/lib/icon';
import { cn } from '~/lib/utils';

interface WorkHighlightCardProps {
  children: ReactNode;
  className?: string;
}

export const WorkHighlightCard = ({ children, className }: WorkHighlightCardProps) => {
  const project = useProject();

  return (
    <section id="work-item-highlights" className={className}>
      <div
        id="work-item-highlights-content"
        className="highlight-card p-3 md:p-6 gap-y-8 md:gap-y-12 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl"
        style={
          {
            '--highlight-card-accent-color': project.color || 'rgba(242, 242, 242, 0.1)',
          } as CSSProperties
        }
      >
        {children}
      </div>
    </section>
  );
};

interface WorkHighlightHeaderProps {
  description: string;
}

export const WorkHighlightHeader = ({ description }: WorkHighlightHeaderProps) => {
  const project = useProject();

  return (
    <div className="flex flex-col justify-between items-center gap-y-4">
      <div className="rounded-full bg-custom-dark/50 p-1.5 2xl:p-2.5 shadow-md shadow-custom-dark">
        {project.color && (
          <FaMountainSun
            color={project.color}
            className="w-8 h-8 md:w-10 md:h-10 2xl:w-12 2xl:h-12"
          />
        )}
      </div>
      <h5 className="text-custom-light/50">Highlights</h5>
      <h5 className="text-center">{description}</h5>
    </div>
  );
};

interface WorkHighlightAssetProps {
  publicId: Asset['publicId'];
  resourceType: Asset['resourceType'];
  alt: Asset['alt'];
  className?: string;
}

export const WorkHighlightAsset = ({
  publicId,
  resourceType,
  alt,
  className,
}: WorkHighlightAssetProps) => {
  const project = useProject();

  return (
    <div className={cn('relative w-full flex flex-col items-center', className)}>
      <WorkAsset publicId={publicId} resourceType={resourceType} alt={alt} color={project.color} />

      <h5 className="flex flex-row w-full justify-end items-center gap-x-2 mt-2 text-end text-custom-light/50">
        {alt}
        <Badge variant="secondary" className="uppercase text-[10px] tracking-wider">
          {resourceType === 'pdf' || publicId.endsWith('.pdf') ? 'PDF' : resourceType}
        </Badge>
      </h5>
    </div>
  );
};

export const WorkHighlightFooter = () => {
  const project = useProject();
  const links = (project.links as { name: string; url: string }[]) || [];
  const isOdd = links.length % 2 !== 0;

  // Helper to render a single button to keep code DRY
  const renderButton = (link: { name: string; url: string }, index: number) => {
    const IconComponent = getLinkIcon(link.name);
    return (
      <Button
        key={index}
        asChild
        variant="outline"
        className="w-full md:w-auto h-10 px-6 border-custom-light/10 bg-custom-light/5 text-custom-light hover:text-white hover:border-custom-light/20 transition-all duration-300 backdrop-blur-md"
        style={{ '--link-color': project.color } as CSSProperties}
      >
        <Link
          to={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2"
        >
          {IconComponent && <IconComponent className="w-4 h-4" />}
          <span className="whitespace-nowrap">{link.name}</span>
          <FiExternalLink className="w-3 h-3 opacity-50 ml-0.5" />
        </Link>
      </Button>
    );
  };

  // 1. Fallback: No Links
  if (links.length === 0) {
    return (
      <div className="flex flex-col md:flex-row w-full flex-wrap justify-center items-center gap-3 md:gap-8 py-8 md:py-12 border-t border-custom-light/10">
        <div className="flex flex-col text-center">
          <p className="text-custom-light/70">This project is not publicly available.</p>
          <p className="text-custom-light/50 text-sm">
            Feel free to reach out for more information.
          </p>
        </div>
      </div>
    );
  }

  // 2. Odd Links (1, 3, 5): Use 3-column layout for Perfect Centering
  if (isOdd) {
    const middleIndex = Math.floor(links.length / 2);
    const leftLinks = links.slice(0, middleIndex);
    const middleLink = links[middleIndex];
    const rightLinks = links.slice(middleIndex + 1);

    return (
      <div className="w-full py-8 md:py-12 border-t border-custom-light/10">
        <div className="flex flex-col md:hidden w-full items-stretch gap-3">
          {links.map((link, i) => renderButton(link, i))}
        </div>

        <div className="hidden md:flex w-full items-center justify-between">
          <div className="flex-1 flex justify-end gap-8">
            {leftLinks.map((link, i) => renderButton(link, i))}
          </div>

          <div className="px-8 shrink-0 flex justify-center">
            {renderButton(middleLink, middleIndex)}
          </div>

          <div className="flex-1 flex justify-start gap-8">
            {rightLinks.map((link, i) => renderButton(link, i + middleIndex + 1))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row w-full flex-wrap justify-center items-stretch md:items-center gap-3 md:gap-8 py-8 md:py-12 border-t border-custom-light/10">
      {links.map((link, i) => renderButton(link, i))}
    </div>
  );
};
