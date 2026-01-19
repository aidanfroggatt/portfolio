import { date, integer, pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';
import { assets } from './assets';
import { experienceTypeEnum } from './enums';

export const about = pgTable('about', {
  id: uuid('id').primaryKey().defaultRandom(),
  type: varchar('type', { length: 50 }).notNull(),
  title: text('title'),
  text: text('text'),
  index: integer('index').notNull(),
  assetId: uuid('asset_id').references(() => assets.id),
});

export const experiences = pgTable('experiences', {
  id: uuid('id').primaryKey().defaultRandom(),
  type: experienceTypeEnum('type').notNull().default('work'),
  company: varchar('company', { length: 255 }).notNull(),
  companyWebsite: text('company_website'),
  role: varchar('role', { length: 255 }).notNull(),
  team: varchar('team', { length: 255 }),
  startDate: date('start_date').notNull(),
  endDate: date('end_date'),
  description: text('description').notNull(),
});

export const awards = pgTable('awards', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title', { length: 255 }).notNull(),
  association: varchar('association', { length: 255 }).notNull(),
  link: text('link').notNull(),
});
