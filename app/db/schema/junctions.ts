import { pgTable, primaryKey, text } from 'drizzle-orm/pg-core';
import { projects } from './projects';
import { technologies } from './technologies';

export const projectsToTechnologies = pgTable(
  'projects_to_technologies',
  {
    projectId: text('project_id')
      .notNull()
      .references(() => projects.id),
    technologyName: text('technology_name')
      .notNull()
      .references(() => technologies.name),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.projectId, t.technologyName] }),
  })
);
