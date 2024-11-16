'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Search, Ticket } from 'lucide-react'
import Link from "next/link"



const events = [
  { id: 1, name: "Concierto de Rock", date: "2024-07-15", location: "Estadio Nacional", category: "Música", price: 50, image: "/placeholder.svg?height=100&width=200" },
  { id: 2, name: "Festival de Comida", date: "2024-08-05", location: "Parque Central", category: "Gastronomía", price: 25, image: "/placeholder.svg?height=100&width=200" },
  { id: 3, name: "Conferencia Tech", date: "2024-09-20", location: "Centro de Convenciones", category: "Tecnología", price: 100, image: "/placeholder.svg?height=100&width=200" },
  { id: 4, name: "Obra de Teatro", date: "2024-10-10", location: "Teatro Municipal", category: "Arte", price: 30, image: "/placeholder.svg?height=100&width=200" },
  { id: 5, name: "Maratón de la Ciudad", date: "2024-11-05", location: "Plaza Principal", category: "Deportes", price: 15, image: "/placeholder.svg?height=100&width=200" },
]

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')

  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === '' || event.category === categoryFilter)
  )

  return (
   
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Eventos Disponibles</h2>
          
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-full sm:w-1/2 relative">
              <Input
                type="text"
                placeholder="Buscar eventos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
            {/* <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todas las categorías</SelectItem>
                <SelectItem value="Música">Música</SelectItem>
                <SelectItem value="Gastronomía">Gastronomía</SelectItem>
                <SelectItem value="Tecnología">Tecnología</SelectItem>
                <SelectItem value="Arte">Arte</SelectItem>
                <SelectItem value="Deportes">Deportes</SelectItem>
              </SelectContent>
            </Select> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <img src={event.image} alt={event.name} className="w-full h-40 object-cover rounded-t-lg" />
                  <CardTitle className="mt-2">{event.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <MapPin className="mr-2 h-4 w-4" />
                    {event.location}
                  </p>
                  <p className="text-sm font-semibold mt-2">Categoría: {event.category}</p>
                  <p className="text-lg font-bold mt-2">${event.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Comprar Tickets</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No se encontraron eventos que coincidan con tu búsqueda.</p>
          )}
        </div>
      </main>
  )
}