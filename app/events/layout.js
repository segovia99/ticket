import { Ticket } from "lucide-react";
import Link from "next/link";

export default function EventsLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
    <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-900 flex items-center">
        <Ticket className="mr-2 h-8 w-8" />
        EventoTicket
      </h1>
      <nav>
        <Link href="/" className="text-gray-500 hover:text-gray-700 mr-4">Inicio</Link>
        <Link href="/events" className="text-gray-900 font-semibold">Eventos</Link>
      </nav>
    </div>
  </header>
      {children}
    </div>
  )
}