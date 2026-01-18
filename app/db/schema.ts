import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),

  slug: text("slug").notNull().unique(), // Matches your MDX filename (e.g., "tesla-internship")
  title: text("title").notNull(),

  shortDescription: text("short_description").notNull(), // For the card preview
  coverImageUrl: text("cover_image_url"), // R2 URL
  techStack: text("tech_stack").array(), // ['React', 'Drizzle', 'Neon'] -> For filtering

  publishedAt: timestamp("published_at"), // Sort by "Newest"
  isFeatured: boolean("is_featured").default(false), // "Pin" to home page
  type: text("type"), // 'Work', 'School', 'Hackathon'

  views: integer("views").default(0),
});
