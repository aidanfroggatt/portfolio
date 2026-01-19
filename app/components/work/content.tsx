import { Content, ImageAsset, PDFAsset, VideoAsset } from '~/types/work';
import Dot from '../ui/dot';
import VideoWithAutoplay from '../VideoWithAutoplay';

interface WorkContentProps {
  content?: Content[];
}

const WorkContent = (projectInfo: WorkContentProps) => {
  if (!projectInfo || !projectInfo.content) {
    return null;
  }

  return (
    <div
      id="work-item-content"
      className="flex flex-col justify-center items-center w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl"
    >
      {projectInfo.content.map((contentSection: Content, index) => (
        <section
          id="work-item-content"
          key={index}
          className="border-t border-custom-light/20 py-8 md:py-16 flex flex-col gap-y-8 md:gap-y-16 w-page-default md:w-page-md lg:w-page-lg 2xl:w-page-2xl"
        >
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row justify-start items-center gap-x-4">
              <Dot />
              <div className="text-xs 2xl:text-sm text-custom-light/50 py-4 2xl:py-8">
                {contentSection.type}
              </div>
            </div>
            {contentSection.title && (
              <h2 className="text-shadow-mobile md:text-shadow">{contentSection.title}</h2>
            )}
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-20 gap-y-2 justify-start items-start">
            <div>
              {contentSection.subtitle && (
                <h4 className="md:flex-grow text-shadow-mobile md:text-shadow">
                  {contentSection.subtitle}
                </h4>
              )}
            </div>
            <div className="flex flex-col items-start justify-start">
              {contentSection.description && (
                <p className="text-custom-light/50">{contentSection.description}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-8 md:gap-y-16">
            {contentSection.assets &&
              contentSection.assets.map((asset: ImageAsset | VideoAsset | PDFAsset, index) => (
                <div key={index} className="relative w-full flex flex-col items-center">
                  {asset.type === 'VIDEO' ? (
                    <VideoWithAutoplay
                      asset={{
                        src: asset.src,
                        poster: asset.poster,
                        alt: asset.alt || 'Video',
                      }}
                      className="z-10 w-full h-full highlight-card-asset object-contain"
                    />
                  ) : asset.type === 'IMAGE' ? (
                    <img
                      className="z-10 max-h-[75vh] w-full h-full highlight-card-asset object-contain"
                      src={asset.src}
                      alt={asset.alt}
                    />
                  ) : asset.type === 'PDF' ? (
                    <object
                      data={asset.src}
                      className="z-10 w-full max-h-[75vh] min-h-[75vh] h-full highlight-card-asset object-contain"
                      type="text/html"
                      title={asset.alt}
                      aria-label={asset.alt}
                    />
                  ) : (
                    <p>Invalid asset type.</p>
                  )}
                  <h5 className="flex flex-row w-full justify-end items-center gap-x-2 mt-2 text-end text-custom-light/50">
                    {asset.alt}
                    <span className="bg-custom-dark/50 rounded-full p-1.5 shadow-inner shadow-custom-dark">
                      {asset.type}
                    </span>
                  </h5>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default WorkContent;
