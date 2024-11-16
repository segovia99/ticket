import { pgTable, serial, varchar, numeric, boolean, timestamp, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Tabla: users
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 100 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Tabla: events
export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: varchar('description'),
  date: timestamp('date').notNull(),
  location: varchar('location', { length: 255 }).notNull(),
  status: varchar('status', { length: 50 }).default('unpublish').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Tabla: locations
export const locations = pgTable('locations', {
  id: serial('id').primaryKey(),
  eventId: integer('event_id').notNull().references(() => events.id),
  name: varchar('name', { length: 100 }).notNull(), // Ejemplo: "General", "Asiento 1A"
  seatType: varchar('seat_type', { length: 50 }).notNull(), // Ejemplo: "general", "numerado"
  price: numeric('price', { precision: 10, scale: 2 }).notNull(),
  isReserved: boolean('is_reserved').default(false),
});

// Tabla: reservations
export const reservations = pgTable('reservations', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id),
  locationId: integer('location_id').notNull().references(() => locations.id),
  reservedAt: timestamp('reserved_at').defaultNow(),
});

// Tabla: managers
export const managers = pgTable('managers', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 100 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});

// Relaciones (opcional, para navegabilidad en TypeScript)
export const reservationsRelations = relations(reservations, ({ one }) => ({
  user: one(users, { fields: [reservations.userId], references: [users.id] }),
  location: one(locations, { fields: [reservations.locationId], references: [locations.id] }),
}));

export const locationsRelations = relations(locations, ({ one, many }) => ({
  event: one(events, { fields: [locations.eventId], references: [events.id] }),
  reservations: many(reservations),
}));

export const eventsRelations = relations(events, ({ many }) => ({
  locations: many(locations),
}));
