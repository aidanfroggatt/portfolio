import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { ComponentType, CSSProperties, lazy, LazyExoticComponent, Suspense, useRef } from 'react';
import Footer from '~/components/Footer';
import ProgressBar from '~/components/ProgressBar';
import { WorkOverview } from '~/components/work';
import WorkHero from '~/components/work/hero';
import { config } from '~/data/config';
import { db } from '~/db/index.server';
import { hexToRGBA } from '~/lib/color';

const MDX_MODULES = import.meta.glob<{ default: ComponentType }>('../content/projects/*.mdx');

const MDX_COMPONENTS: Record<string, LazyExoticComponent<ComponentType>> = {};

for (const path in MDX_MODULES) {
  const slug = path.match(/\/([^/]+)\.mdx$/)?.[1];
  if (slug) {
    MDX_COMPONENTS[slug] = lazy(MDX_MODULES[path]);
  }
}

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.workId;

  if (!slug) throw new Response('Project ID Required', { status: 400 });

  const project = await db.query.projects.findFirst({
    where: (p, { eq }) => eq(p.id, slug),
    with: {
      heroAsset: true,
      techConnections: {
        orderBy: (t, { asc }) => [asc(t.technologyName)],
        with: {
          tech: true,
        },
      },
    },
  });

  if (!project) {
    throw new Response('Not Found', { status: 404 });
  }

  let nextProject = await db.query.projects.findFirst({
    where: (p, { eq }) => eq(p.index, project.index + 1),
    columns: { id: true, title: true, color: true },
  });

  if (!nextProject) {
    nextProject = await db.query.projects.findFirst({
      where: (p, { eq }) => eq(p.index, 0),
      columns: { id: true, title: true, color: true },
    });
  }

  return {
    project,
    nextProject,
  };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data || !data.project) return [{ title: 'Work Item' }];
  const { project } = data;
  return [
    {
      title: `${config.name} — ${project.title}`,
    },
    {
      name: 'description',
      content: project.description,
    },
  ];
};

const ProjectContent = ({ slug }: { slug: string }) => {
  const Component = MDX_COMPONENTS[slug];

  if (!Component) {
    return null;
  }

  return (
    <Suspense fallback={<div className="py-20 text-center opacity-50">Loading content...</div>}>
      <Component />
    </Suspense>
  );
};

const Work = () => {
  const { project, nextProject } = useLoaderData<typeof loader>();
  const mainRef = useRef<HTMLDivElement>(null);

  const style = project?.color
    ? ({
        '--project-color': hexToRGBA(project.color, 0.5),
        '--selection-text-color': '#f2f2f2',
      } as CSSProperties)
    : {};

  return (
    <>
      {project && nextProject && (
        <ProgressBar work={project} nextWork={nextProject} targetRef={mainRef} />
      )}

      <main
        className="project-selection md:bg-size-[100%_135vh] bg-size-[100%_450px] md:bg-project-page bg-project-page gap-y-16 md:gap-y-40 pt-16 md:pt-28 2xl:pt-44 pb-16 md:pb-40 2xl:pb-60 relative bg-no-repeat flex flex-col items-center text-custom-light overflow-hidden w-full max-w-full"
        style={style}
        ref={mainRef}
      >
        <WorkHero
          title={project.title}
          association={project.association}
          endDate={project.endDate ? new Date(project.endDate) : undefined}
          asset={project.heroAsset}
        />

        <WorkOverview
          overviewDescription={project.overviewDescription}
          roleTitle={project.roleTitle}
          roleDescription={project.roleDescription}
          team={project.team || []}
          technologies={project.techConnections.map((c) => ({
            name: c.tech.name,
          }))}
          startDate={new Date(project.startDate)}
          endDate={project.endDate ? new Date(project.endDate) : undefined}
          color={project.color}
        />

        <ProjectContent slug={project.id} />
      </main>
      <Footer />
    </>
  );
};

export default Work;
