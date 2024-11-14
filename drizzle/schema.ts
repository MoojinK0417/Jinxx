import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";
import * as z from "zod";

// User Table Definition
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }), // Removed `.notNull()` to allow null or empty passwords for Google users
  name: varchar("name", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Zod Schema for Inserting User
export const InsertUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).optional(), // Made the password optional for Google users
  name: z.string().optional(),
});
