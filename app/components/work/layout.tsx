import { CSSProperties, ReactNode, useRef } from 'react';
import Footer from '~/components/Footer';
import ProgressBar from '~/components/ProgressBar';
import { ProjectProvider } from '~/contexts/project-context';
import { Project } from '~/db/schema';
import { hexToRGBA } from '~/lib/color';

interface WorkLayoutProps {
  children: ReactNode;
  projectInfo: Project;
  nextProject: Pick<Project, 'id' | 'title' | 'color'> | undefined;
}

const WorkLayout = ({ children, projectInfo, nextProject }: WorkLayoutProps) => {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <ProjectProvider project={projectInfo}>
      {projectInfo && nextProject && (
        <ProgressBar work={projectInfo} nextWork={nextProject} targetRef={mainRef} />
      )}
      <main
        className="project-selection md:bg-size-[100%_135vh] bg-size-[100%_450px] md:bg-project-page bg-project-page gap-y-16 md:gap-y-40 pt-16 md:pt-28 2xl:pt-44 pb-16 md:pb-40 2xl:pb-60 relative bg-no-repeat bg-custom-dark flex flex-col items-center text-custom-light overflow-hidden w-full max-w-full"
        style={
          projectInfo?.color
            ? ({
                '--project-color': hexToRGBA(projectInfo.color, 0.5),
                '--selection-text-color': '#f2f2f2',
              } as CSSProperties)
            : {}
        }
        ref={mainRef}
      >
        {children}
      </main>
      <Footer />
    </ProjectProvider>
  );
};

export default WorkLayout;
