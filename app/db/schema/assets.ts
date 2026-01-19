import { pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { assetTypeEnum } from './enums';

export const assets = pgTable('assets', {
  id: uuid('id').primaryKey().defaultRandom(),
  type: assetTypeEnum('type').notNull(),
  src: text('src').notNull(),
  alt: text('alt').notNull(),
  poster: text('poster'),
});
