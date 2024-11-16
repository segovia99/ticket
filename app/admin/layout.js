'use client'

import { useState } from 'react'
import { Calendar, Home, Settings, Users } from "lucide-react"
import Link from "next/link"

export default function AdminLayout({ children }) {


  return (
    <div className="flex h-screen bg-gray-100">
      {/* Barra lateral */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200">
            <Home className="inline-block mr-2" size={20} />
            Dashboard
          </Link>
          <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200">
            <Calendar className="inline-block mr-2" size={20} />
            Eventos
          </Link>
          <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200">
            <Users className="inline-block mr-2" size={20} />
            Usuarios
          </Link>
          <Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-colors duration-200">
            <Settings className="inline-block mr-2" size={20} />
            Configuración
          </Link>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-8 overflow-y-auto">
       {children}
      </main>
    </div>
  )
}