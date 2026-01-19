import { pgTable, text, varchar } from 'drizzle-orm/pg-core';
import { assetTypeEnum } from './enums';

export const assets = pgTable('assets', {
  id: varchar('id', { length: 255 }).primaryKey(),
  type: assetTypeEnum('type').notNull(),
  src: text('src').notNull(),
  alt: text('alt').notNull(),
  poster: text('poster'),
});
