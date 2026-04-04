import VideoWithAutoplay from '~/components/ui/autoplay-video';
import { Asset } from '~/db/schema';
import { buildUrl } from '~/lib/cloudinary';
import { formatMonthYear } from '~/lib/date';

type HeroAsset = Pick<Asset, 'resourceType' | 'publicId' | 'alt'>;

interface WorkHeroProps {
  title: string;
  association?: string;
  endDate?: Date | null;
  asset?: HeroAsset;
}

const WorkHero = (projectInfo: WorkHeroProps) => {
  if (!projectInfo || !projectInfo.title) {
    return null;
  }

  return (
    <section
      id="work-item-hero"
      className="flex flex-col justify-start items-center relative w-page-default pt-16 md:pt-12 md:w-page-md lg:w-page-lg 2xl:w-page-2xl gap-y-4"
    >
      <h1
        id="work-item-hero-content"
        className="flex justify-center items-center text-shadow-mobile md:text-shadow text-center"
      >
        {projectInfo.title}
      </h1>
      <span className="flex justify-center items-center text-base lg:text-lg 2xl:text-xl font-normal text-custom-light/50 text-center">
        {projectInfo.association && projectInfo.association} —{' '}
        {projectInfo.endDate
          ? `${formatMonthYear(new Date(projectInfo.endDate))}`
          : 'In development'}
      </span>

      {projectInfo.asset && (
        <div className="highlight-card-asset max-h-[75vh] h-full p-4 mt-4 w-fit relative z-10">
          {projectInfo.asset.resourceType === 'video' ? (
            <VideoWithAutoplay
              className="rounded-[2vmax] object-cover"
              publicId={projectInfo.asset.publicId}
              alt={projectInfo.asset.alt}
            />
          ) : (
            <img
              className="rounded-[2vmax] object-cover"
              src={buildUrl(projectInfo.asset.publicId, 'image')}
              alt={projectInfo.asset.alt}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default WorkHero;
