// app/actions/events.ts
'use server';

import { db } from "@/db";


export async function createEvent(data) {
  const { name, description, date, location, status = 'unpublish', seats } = data;

  // Inserta el evento
  const [event] = await db
    .insert(events)
    .values({ name, description, date: new Date(date), location, status })
    .returning({ id: events.id });

  // Inserta las localidades
  await db.insert(locations).values(
    seats.map((seat) => ({
      eventId: event.id,
      name: seat.name,
      seatType: seat.seatType,
      price: seat.price,
    }))
  );

  return event;
}
