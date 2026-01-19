import { pgTable, primaryKey, text, varchar } from 'drizzle-orm/pg-core';
import { projects } from './projects';
import { technologies } from './technologies';

export const projectsToTechnologies = pgTable(
  'projects_to_technologies',
  {
    projectId: text('project_id')
      .notNull()
      .references(() => projects.id),
    technologyId: varchar('technology_id', { length: 255 })
      .notNull()
      .references(() => technologies.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.projectId, t.technologyId] }),
  })
);
