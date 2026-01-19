import { formatMonthYear } from "~/utils/date";
import VideoWithAutoplay from "../VideoWithAutoplay";

interface HeroAsset {
  type: "IMAGE" | "VIDEO";
  src: string;
  alt: string;
  poster: string | null;
}

interface WorkHeroProps {
  title: string;
  association?: string;
  endDate?: Date;
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
      <span className="flex justify-center items-center text-base lg:text-lg 2xl:text-xl font-normal text-custom-light text-opacity-50 text-center">
        {projectInfo.association && projectInfo.association} —{" "}
        {projectInfo.endDate
          ? `${formatMonthYear(projectInfo.endDate)}`
          : "In development"}
      </span>
      {projectInfo.asset && (
        <>
          {projectInfo.asset.type === "VIDEO" ? (
            <VideoWithAutoplay
              className="rounded-[2vmax] p-4 mt-4 w-fit object-cover"
              asset={projectInfo.asset}
            />
          ) : (
            <img
              className="rounded-[2vmax] p-4 mt-4 w-fit object-cover relative z-10 max-h-[75vh] h-full highlight-card-asset"
              src={projectInfo.asset.src}
              alt={projectInfo.asset.alt}
            />
          )}
        </>
      )}
    </section>
  );
};

export default WorkHero;
