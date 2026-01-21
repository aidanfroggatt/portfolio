import { pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { resourceTypeEnum } from '~/db/schema/enums';

export const assets = pgTable('assets', {
  id: uuid('id').primaryKey().defaultRandom(),
  publicId: text('public_id').notNull(),
  resourceType: resourceTypeEnum('resource_type').notNull().default('image'),
  alt: text('alt').notNull(),
});
