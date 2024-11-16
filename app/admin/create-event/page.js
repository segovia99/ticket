'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createEvent } from '@/app/actions/events'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


export default function CreateEventForm() {
  const router = useRouter()
  const [seats, setSeats] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const eventData = {
      name: formData.get('name'),
      description: formData.get('description') ,
      date: formData.get('date'),
      location: formData.get('location'),
      status: formData.get('status'),
      seats: seats
    }

    try {
      await createEvent(eventData)
      router.push('/events') // Redirect to events list page
    } catch (error) {
      console.error('Failed to create event:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const addSeat = () => {
    setSeats([...seats, { name: '', seatType: '', price: 0 }])
  }

  const updateSeat = (index, field, value) => {
    const updatedSeats = [...seats]
    updatedSeats[index] = { ...updatedSeats[index], [field]: value }
    setSeats(updatedSeats)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Create New Event</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Event Name</label>
            <Input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <Textarea id="description" name="description" />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <Input type="datetime-local" id="date" name="date" required />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <Input type="text" id="location" name="location" required />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
            <Select name="status" defaultValue="unpublish">
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unpublish">Unpublish</SelectItem>
                <SelectItem value="publish">Publish</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Seats</h3>
            {seats.map((seat, index) => (
              <div key={index} className="flex space-x-2 mb-2">
                <Input
                  type="text"
                  placeholder="Seat Name"
                  value={seat.name}
                  onChange={(e) => updateSeat(index, 'name', e.target.value)}
                  required
                />
                <Input
                  type="text"
                  placeholder="Seat Type"
                  value={seat.seatType}
                  onChange={(e) => updateSeat(index, 'seatType', e.target.value)}
                  required
                />
                <Input
                  type="number"
                  placeholder="Price"
                  value={seat.price}
                  onChange={(e) => updateSeat(index, 'price', parseFloat(e.target.value))}
                  required
                />
              </div>
            ))}
            <Button type="button" onClick={addSeat} variant="outline">Add Seat</Button>
          </div>
          <CardFooter className="px-0">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Creating...' : 'Create Event'}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}