import { relations } from "drizzle-orm";
import { assets } from "./assets";
import { projectsToTechnologies } from "./junctions";
import { projects } from "./projects";
import { technologies } from "./technologies";

export const projectsRelations = relations(projects, ({ one, many }) => ({
  heroAsset: one(assets, {
    fields: [projects.heroAssetId],
    references: [assets.id],
  }),
  techConnections: many(projectsToTechnologies),
}));

export const technologiesRelations = relations(technologies, ({ many }) => ({
  projectConnections: many(projectsToTechnologies),
}));

export const projectsToTechnologiesRelations = relations(
  projectsToTechnologies,
  ({ one }) => ({
    project: one(projects, {
      fields: [projectsToTechnologies.projectId],
      references: [projects.id],
    }),
    tech: one(technologies, {
      fields: [projectsToTechnologies.technologyId],
      references: [technologies.id],
    }),
  }),
);
