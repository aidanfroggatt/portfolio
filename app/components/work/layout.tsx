import { CSSProperties, ReactNode, useRef } from 'react';
import Footer from '~/components/Footer';
import ProgressBar from '~/components/ProgressBar';
import { hexToRGBA } from '~/lib/color';
import { Work } from '~/types/work';

interface WorkLayoutProps {
  children: ReactNode;
  projectInfo: Work;
  nextProject: Work;
}

const WorkLayout = ({ children, projectInfo, nextProject }: WorkLayoutProps) => {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {projectInfo && nextProject && (
        <ProgressBar work={projectInfo} nextWork={nextProject} targetRef={mainRef} />
      )}
      <main
        className="project-selection md:bg-project-page-md bg-project-page-default md:bg-project-page bg-project-page gap-y-16 md:gap-y-40 pt-16 md:pt-28 2xl:pt-44 pb-16 md:pb-40 2xl:pb-60 relative bg-no-repeat bg-custom-dark flex flex-col items-center text-custom-light overflow-hidden w-full max-w-full"
        style={
          projectInfo?.color
            ? ({
                '--project-color': hexToRGBA(projectInfo.color, 0.5),
                '--selection-text-color': '#f2f2f2', // white text when project color exists
              } as CSSProperties)
            : {}
        }
        ref={mainRef}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default WorkLayout;
