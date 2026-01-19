import { integer, pgTable, primaryKey, text } from "drizzle-orm/pg-core";
import { projects } from "./projects";
import { technologies } from "./technologies";

export const projectsToTechnologies = pgTable(
  "projects_to_technologies",
  {
    projectId: text("project_id")
      .notNull()
      .references(() => projects.id),
    technologyId: integer("technology_id")
      .notNull()
      .references(() => technologies.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.projectId, t.technologyId] }),
  }),
);
