import { pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const technologies = pgTable('technologies', {
  id: varchar('id', { length: 255 }).primaryKey(),
  name: text('name').notNull().unique(),
});
