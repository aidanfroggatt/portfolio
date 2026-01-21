import { Link } from '@remix-run/react';
import { CSSProperties } from 'react';
import { FaMountainSun } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import WorkAsset from '~/components/work/asset';
import type { Asset, Project } from '~/db/schema';
import { getLinkIcon } from '~/lib/icon';
interface WorkHighlightsProps {
  highlights?: {
    description: string;
    assets: {
      publicId: Asset['publicId'];
      resourceType: Asset['resourceType'];
      alt: Asset['alt'];
    }[];
  };
  links?: {
    name: string;
    url: string;
  }[];
  color?: Project['color'];
}

const WorkHighlights = (projectInfo: WorkHighlightsProps) => {
  if (!projectInfo || !projectInfo.highlights) {
    return null;
  }

  return (
    <section id="work-item-highlights">
      <div
        id="work-item-highlights-content"
        className="highlight-card p-3 md:p-6 gap-y-8 md:gap-y-12 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl"
        style={{ '--highlight-card-accent-color': projectInfo.color } as CSSProperties}
      >
        <div className="flex flex-col justify-between items-center gap-y-4">
          <div className="rounded-full bg-custom-dark/50 p-1.5 2xl:p-2.5 shadow-md shadow-custom-dark">
            {projectInfo.color && (
              <FaMountainSun
                color={projectInfo.color}
                className="w-8 h-8 md:w-10 md:h-10 2xl:w-12 2xl:h-12"
              />
            )}
          </div>
          <h5 className="text-custom-light/50">HIGHLIGHTS</h5>
          <h5 className="text-center">{projectInfo?.highlights?.description}</h5>
        </div>

        {projectInfo.highlights?.assets.map((asset, index) => (
          <div key={index} className="relative w-full flex flex-col items-center">
            <WorkAsset
              publicId={asset.publicId}
              resourceType={asset.resourceType}
              alt={asset.alt}
              color={projectInfo.color}
            />

            <h5 className="flex flex-row w-full justify-end items-center gap-x-2 mt-2 text-end text-custom-light/50">
              {asset.alt}
              <Badge variant="assetType">{asset.resourceType}</Badge>
            </h5>
          </div>
        ))}

        <div className="flex flex-col md:flex-row w-full flex-wrap justify-center items-stretch md:items-center gap-3 md:gap-8 py-8 md:py-12 border-t border-custom-light/10">
          {projectInfo.links ? (
            projectInfo.links.map((link, index) => {
              const IconComponent = getLinkIcon(link.name);
              return (
                <Button
                  key={index}
                  asChild
                  variant="outline"
                  className="w-full md:w-auto h-10 px-6 border-custom-light/10 bg-custom-light/5 text-custom-light hover:text-white hover:border-custom-light/20 transition-all duration-300 backdrop-blur-md"
                  style={{ '--link-color': projectInfo.color } as CSSProperties}
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
            })
          ) : (
            <div className="flex flex-col text-center">
              <p className="text-custom-light/70">This project is not publicly available.</p>
              <p className="text-custom-light/50 text-sm">
                Feel free to reach out for more information.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WorkHighlights;
