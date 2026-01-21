import { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { createElement, Suspense } from 'react';
import { WorkHero, WorkLayout, WorkOverview } from '~/features/work/components';
import { getMdxComponent } from '~/features/work/content/registry';
import { getNextProject, getWorkById } from '~/features/work/work.server';
import { config } from '~/lib/config';

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.workId;

  if (!slug) throw new Response('Project ID Required', { status: 400 });

  const project = await getWorkById(slug);

  if (!project) {
    throw new Response('Not Found', { status: 404 });
  }

  const nextProject = await getNextProject(project.index);

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
  const component = getMdxComponent(slug);

  if (!component) {
    return (
      <div className="py-20 flex flex-col items-center justify-center opacity-50 border-2 border-dashed border-custom-light/20 rounded-xl m-10">
        <p>No content file found for:</p>
        <code className="bg-custom-light/10 px-2 py-1 rounded mt-2">{slug}.mdx</code>
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="py-20 text-center opacity-50">Loading content...</div>}>
      {createElement(component)}
    </Suspense>
  );
};

const Work = () => {
  const { project, nextProject } = useLoaderData<typeof loader>();

  return (
    <WorkLayout projectInfo={project} nextProject={nextProject}>
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
    </WorkLayout>
  );
};

export default Work;
