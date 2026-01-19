import { integer, pgTable, text } from "drizzle-orm/pg-core";
import { assetTypeEnum } from "./enums";

export const assets = pgTable("assets", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  type: assetTypeEnum("type").notNull(),
  src: text("src").notNull(),
  alt: text("alt").notNull(),
  poster: text("poster"),
});
