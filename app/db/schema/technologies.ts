import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const technologies = pgTable("technologies", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull().unique(),
});
