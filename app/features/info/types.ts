import { type InferSelectModel } from 'drizzle-orm';
import { about, assets, awards, experiences } from '~/db/schema';

export type Award = InferSelectModel<typeof awards>;
export type Experience = InferSelectModel<typeof experiences>;
export type Asset = InferSelectModel<typeof assets>;
export type About = InferSelectModel<typeof about>;

export interface AboutWithAsset extends About {
  asset: Asset | null;
}
