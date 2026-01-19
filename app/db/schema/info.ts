import { date, integer, pgTable, text, varchar } from 'drizzle-orm/pg-core';
import { assets } from './assets';
import { experienceTypeEnum } from './enums';

export const about = pgTable('about', {
  id: varchar('id', { length: 255 }).primaryKey(),
  type: varchar('type', { length: 50 }).notNull(),
  title: text('title'),
  text: text('text'),
  index: integer('index').notNull(),
  assetId: varchar('asset_id', { length: 255 }).references(() => assets.id),
});

export const experiences = pgTable('experiences', {
  id: varchar('id', { length: 255 }).primaryKey(),
  type: experienceTypeEnum('type').notNull().default('work'),
  company: varchar('company', { length: 255 }).notNull(),
  companyWebsite: text('company_website'),
  role: varchar('role', { length: 255 }).notNull(),
  team: varchar('team', { length: 255 }),
  startDate: date('start_date').notNull(),
  endDate: date('end_date'),
  description: text('description').notNull(),
  index: integer('index').notNull(),
});

export const awards = pgTable('awards', {
  id: varchar('id', { length: 255 }).primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  association: varchar('association', { length: 255 }).notNull(),
  link: text('link').notNull(),
  index: integer('index').notNull(),
});
