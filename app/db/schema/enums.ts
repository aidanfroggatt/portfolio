import { pgEnum } from 'drizzle-orm/pg-core';

export const assetTypeEnum = pgEnum('asset_type', ['IMAGE', 'VIDEO']);
export const experienceTypeEnum = pgEnum('experience_type', ['work', 'involvement']);
