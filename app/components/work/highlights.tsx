import { Link } from '@remix-run/react';
import { CSSProperties } from 'react';
import { FaMountainSun } from 'react-icons/fa6';
import { FiExternalLink } from 'react-icons/fi';
import { HighlightItem } from '~/types/work';
import { hexToRGBA } from '~/utils/color';
import { getLinkIcon } from '~/utils/icon';
import VideoWithAutoplay from '../VideoWithAutoplay';
import { Button } from '../ui/button';

interface WorkHighlightsProps {
  highlights?: {
    description: string;
    items: HighlightItem[];
  };
  links?: {
    name: string;
    link: string;
    icon: string;
  }[];
  color?: string;
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
            <FaMountainSun
              color={projectInfo.color}
              className="w-8 h-8 md:w-10 md:h-10 2xl:w-12 2xl:h-12"
            />
          </div>
          <h5 className="text-custom-light/50">HIGHLIGHTS</h5>
          <h5 className="text-center">{projectInfo?.highlights?.description}</h5>
        </div>
        {projectInfo.highlights?.items.map((highlight: HighlightItem, index) => {
          return (
            <div key={index} className="relative w-full flex flex-col items-center">
              {highlight.asset.type === 'VIDEO' ? (
                <VideoWithAutoplay
                  className={
                    'z-10 max-h-[75vh] w-full highlight-card-asset bg-highlight-card-asset'
                  }
                  style={
                    projectInfo?.color
                      ? ({
                          '--project-color': hexToRGBA(projectInfo.color, 0.4),
                        } as React.CSSProperties)
                      : {}
                  }
                  asset={highlight.asset}
                />
              ) : highlight.asset.type === 'PDF' ? (
                <object
                  data={highlight.asset.src}
                  className="z-10 w-full max-h-[75vh] min-h-[75vh] h-full highlight-card-asset bg-highlight-card-asset"
                  style={
                    projectInfo?.color
                      ? ({
                          '--project-color': hexToRGBA(projectInfo.color, 0.4),
                        } as React.CSSProperties)
                      : {}
                  }
                  type="text/html"
                  title={highlight.asset.alt}
                  aria-label={highlight.asset.alt}
                />
              ) : highlight.asset.type === 'IMAGE' ? (
                <img
                  className="z-10 max-h-[75vh] w-full highlight-card-asset bg-highlight-card-asset object-contain"
                  style={
                    projectInfo?.color
                      ? ({
                          '--project-color': hexToRGBA(projectInfo.color, 0.4),
                        } as React.CSSProperties)
                      : {}
                  }
                  src={highlight.asset.src}
                  alt={highlight.asset.alt}
                />
              ) : (
                <p>Invalid asset type.</p>
              )}
              <h5 className="flex flex-row w-full justify-end items-center gap-x-2 mt-2 text-end text-custom-light/50">
                {highlight.asset.alt}
                <span className="bg-custom-dark/50 rounded-full p-1.5 shadow-inner shadow-custom-dark">
                  {highlight.asset.type}
                </span>
              </h5>
            </div>
          );
        })}
        <div className="flex flex-col md:flex-row w-full flex-wrap justify-center items-stretch md:items-center gap-3 md:gap-8 py-8 md:py-12 border-t border-custom-light/10">
          {projectInfo.links ? (
            projectInfo.links.map((link, index) => {
              const IconComponent = getLinkIcon(link.name);
              return (
                <Button
                  key={index}
                  asChild
                  variant="outline"
                  className="
                    /* RESPONSIVE WIDTH: Full width on mobile, auto width on desktop */
                    w-full md:w-auto
                    h-10 px-6 
                    border-custom-light/10 bg-custom-light/5 text-custom-light 
                    hover:text-white hover:border-custom-light/20 
                    transition-all duration-300 backdrop-blur-md
                  "
                  style={{ '--link-color': projectInfo.color } as CSSProperties}
                >
                  <Link
                    to={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    /* CENTER CONTENT: Ensures text is centered in the wide mobile button */
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
