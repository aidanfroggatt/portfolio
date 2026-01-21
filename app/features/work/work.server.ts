import { db } from '~/db/index.server';

/**
 * Fetch all work samples ordered by their index.
 * Used for the main work listing page (work._index.tsx).
 */
export async function getAllWork() {
  return db.query.projects.findMany({
    orderBy: (projects, { asc }) => [asc(projects.index)],
    with: {
      heroAsset: true,
    },
  });
}

/**
 * Fetch a single project by its slug (ID).
 * Includes all necessary relations (hero asset, technologies) for the work detail page.
 */
export async function getWorkById(slug: string) {
  return db.query.projects.findFirst({
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
}

/**
 * Find the next project in the sequence to support navigation.
 * Logic:
 * 1. Look for the project with index = currentIndex + 1
 * 2. If not found (end of list), loop back to index = 0
 */
export async function getNextProject(currentIndex: number) {
  // Try to find the next sequential project
  let nextProject = await db.query.projects.findFirst({
    where: (p, { eq }) => eq(p.index, currentIndex + 1),
    columns: { id: true, title: true, color: true },
  });

  // If we are at the end of the list, wrap around to the first project
  if (!nextProject) {
    nextProject = await db.query.projects.findFirst({
      where: (p, { eq }) => eq(p.index, 0),
      columns: { id: true, title: true, color: true },
    });
  }

  return nextProject;
}
