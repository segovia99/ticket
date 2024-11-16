'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {  PlusCircle } from "lucide-react"

export default function AdminPage() {
  const [eventName, setEventName] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [eventLocation, setEventLocation] = useState('')
  const [eventDescription, setEventDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar los datos del nuevo evento al backend
    console.log('Nuevo evento:', { eventName, eventDate, eventLocation, eventDescription })
    // Resetear el formulario
    setEventName('')
    setEventDate('')
    setEventLocation('')
    setEventDescription('')
  }

  return (

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center">
              <PlusCircle className="mr-2" size={24} />
              Agregar Nuevo Evento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="eventName">Nombre del Evento</Label>
                <Input
                  id="eventName"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="Ingrese el nombre del evento"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventDate">Fecha del Evento</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventLocation">Ubicación</Label>
                <Input
                  id="eventLocation"
                  value={eventLocation}
                  onChange={(e) => setEventLocation(e.target.value)}
                  placeholder="Ingrese la ubicación del evento"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventDescription">Descripción</Label>
                <Textarea
                  id="eventDescription"
                  value={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                  placeholder="Ingrese una descripción del evento"
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Crear Evento
              </Button>
            </form>
          </CardContent>
        </Card>
  )
}