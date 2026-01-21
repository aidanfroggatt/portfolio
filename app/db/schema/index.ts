import { InferSelectModel } from 'drizzle-orm';
import { assets } from './assets';
import { resourceTypeEnum } from './enums';
import { projects } from './projects';

export * from './assets';
export * from './enums';
export * from './info';
export * from './junctions';
export * from './projects';
export * from './relations';
export * from './technologies';

export type Asset = InferSelectModel<typeof assets>;
export type ResourceType = (typeof resourceTypeEnum.enumValues)[number];
export type Project = InferSelectModel<typeof projects>;
