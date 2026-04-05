import { CSSProperties, ReactNode, useEffect, useRef } from 'react';
import Footer from '~/components/layout/footer';
import { Project } from '~/db/schema';
import ProgressBar from '~/features/work/components/progress';
import { ProjectProvider } from '~/features/work/context/project-context';
import { hexToRGBA } from '~/utils/color';

interface WorkLayoutProps {
  children: ReactNode;
  projectInfo: Project;
  nextProject: Pick<Project, 'id' | 'title' | 'color'> | undefined;
}

const INITIAL_OPACITY = 0.85;

const WorkLayout = ({ children, projectInfo, nextProject }: WorkLayoutProps) => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!projectInfo?.color || !mainRef.current) return;

    let ticking = false;
    let animationFrameId: number;

    const updateOpacity = (): void => {
      if (!mainRef.current) return;

      const fadeDistance = window.innerHeight * 1.5;
      const progress = Math.min(window.scrollY / fadeDistance, 1);
      const currentOpacity = INITIAL_OPACITY - progress * INITIAL_OPACITY;

      mainRef.current.style.setProperty(
        '--project-color',
        hexToRGBA(projectInfo.color, currentOpacity)
      );

      ticking = false;
    };

    const handleScroll = (): void => {
      if (!ticking) {
        animationFrameId = window.requestAnimationFrame(updateOpacity);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [projectInfo?.color]);

  return (
    <ProjectProvider project={projectInfo}>
      {projectInfo && nextProject && (
        <ProgressBar work={projectInfo} nextWork={nextProject} targetRef={mainRef} />
      )}
      <main
        ref={mainRef}
        className="project-selection bg-size-[100%_800px] md:bg-size-[100%_175vh] md:bg-project-page bg-project-page gap-y-16 md:gap-y-40 pt-16 md:pt-28 2xl:pt-44 pb-16 md:pb-40 2xl:pb-60 relative bg-no-repeat bg-custom-dark flex flex-col items-center text-custom-light overflow-hidden w-full max-w-full"
        style={
          projectInfo?.color
            ? ({
                '--project-color': hexToRGBA(projectInfo.color, INITIAL_OPACITY),
                '--selection-text-color': '#f2f2f2',
              } as CSSProperties)
            : {}
        }
      >
        {children}
      </main>
      <Footer />
    </ProjectProvider>
  );
};

export default WorkLayout;
