import { pgEnum } from 'drizzle-orm/pg-core';

export const resourceTypeEnum = pgEnum('resource_type', ['image', 'video', 'raw', 'pdf']);
export const experienceTypeEnum = pgEnum('experience_type', ['work', 'involvement']);
