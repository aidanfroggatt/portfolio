import { boolean, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(), // e.g. "portfolio-v2"
  title: text("title").notNull(),
  description: text("description").notNull(),

  // URLs
  repositoryUrl: text("repository_url"),
  liveUrl: text("live_url"),

  // Metadata
  isFeatured: boolean("is_featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});
