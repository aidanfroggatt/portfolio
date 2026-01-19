import { boolean, integer, jsonb, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { assets } from './assets';

export const projects = pgTable('projects', {
  id: text('id').primaryKey(),

  // Metadata & Sorting
  index: integer('index').notNull().unique(),
  spotlight: boolean('spotlight').notNull().default(false),

  title: text('title').notNull(),
  subtitle: text('subtitle'),
  association: text('association').notNull(),
  description: text('description').notNull(),
  color: text('color').notNull(),

  // Dates
  startDate: timestamp('start_date', { mode: 'date' }).notNull(),
  endDate: timestamp('end_date', { mode: 'date' }),

  // Navigation
  navLink: text('nav_link'),

  // JSON Arrays (Team & Links)
  links: jsonb('links').$type<{ name: string; url: string }[]>(),
  team: jsonb('team').$type<{ name: string; role: string }[]>(),

  // Foreign Key
  heroAssetId: varchar('hero_asset_id', { length: 255 })
    .references(() => assets.id)
    .notNull(),

  // Overview Data
  overviewDescription: text('overview_description').notNull(),
  roleTitle: text('role_title').notNull(),
  roleDescription: text('role_description').notNull(),
});
