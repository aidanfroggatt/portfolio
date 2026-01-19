import { pgTable, text } from 'drizzle-orm/pg-core';

export const technologies = pgTable('technologies', {
  name: text('name').primaryKey(),
});
