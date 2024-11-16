'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle } from 'lucide-react'


// This function would typically be a server action, but for this example, we'll simulate it client-side
async function fetchEvents() {
  // Simulating an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Concert', date: '2023-12-01T20:00', location: 'Stadium', status: 'publish', seats: [] },
        { id: 2, name: 'Conference', date: '2024-01-15T09:00', location: 'Convention Center', status: 'unpublish', seats: [] },
      ])
    }, 500)
  })
}

export default function EventsList() {
  const [events, setEvents] = useState([])
  const router = useRouter()

  useEffect(() => {
    fetchEvents().then(setEvents)
  }, [])

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">Eventos</CardTitle>
          <Button onClick={() => router.push('/admin/create-event')}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Crear Evento
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Ubicación</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell>{event.id}</TableCell>
                  <TableCell>{event.name}</TableCell>
                  <TableCell>{new Date(event.date).toLocaleString()}</TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>{event.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}