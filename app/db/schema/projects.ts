import { boolean, integer, jsonb, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { assets } from './assets';

export const projects = pgTable('projects', {
  id: text('id').primaryKey(),
  index: integer('index').notNull().unique(),
  spotlight: boolean('spotlight').notNull().default(false),
  title: text('title').notNull(),
  subtitle: text('subtitle'),
  association: text('association').notNull(),
  description: text('description').notNull(),
  color: text('color').notNull(),
  startDate: timestamp('start_date', { mode: 'date' }).notNull(),
  endDate: timestamp('end_date', { mode: 'date' }),
  navLink: text('nav_link'),
  links: jsonb('links').$type<{ name: string; url: string }[]>(),
  team: jsonb('team').$type<{ name: string; role: string }[]>(),
  heroAssetId: uuid('hero_asset_id')
    .references(() => assets.id)
    .notNull(),
  overviewDescription: text('overview_description').notNull(),
  roleTitle: text('role_title').notNull(),
  roleDescription: text('role_description').notNull(),
});
