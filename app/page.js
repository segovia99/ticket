"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Ticket, Users } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el inicio de sesión
    console.log("Login:", { email, password });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el registro
    console.log("Signup:", { name, email, password });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Ticket className="mr-2 h-8 w-8" />
            EventoTicket
          </h1>
          <nav>
            <Link href="/" className="text-gray-500 hover:text-gray-700 mr-4">
              Inicio
            </Link>
            <Link href="/events" className="text-gray-900 font-semibold">
              Eventos
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] items-center">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Vive la experiencia. Compra tus tickets ahora.
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mt-4">
                  Accede a los mejores eventos con un solo clic. Fácil, rápido y
                  seguro.
                </p>
                <div className="mt-6 space-x-4">
                  <Button>Ver eventos</Button>
                  <Button variant="outline">Cómo funciona</Button>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Bienvenido a EventoTicket</CardTitle>
                  <CardDescription>
                    Inicia sesión o crea una cuenta para comprar tickets
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
                      <TabsTrigger value="signup">Crear Cuenta</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login">
                      <form onSubmit={handleLogin}>
                        <div className="grid gap-2">
                          <div className="grid gap-1">
                            <Label htmlFor="email">Correo Electrónico</Label>
                            <Input
                              id="email"
                              placeholder="nombre@ejemplo.com"
                              type="email"
                              autoCapitalize="none"
                              autoComplete="email"
                              autoCorrect="off"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="grid gap-1">
                            <Label htmlFor="password">Contraseña</Label>
                            <Input
                              id="password"
                              placeholder="********"
                              type="password"
                              autoCapitalize="none"
                              autoComplete="current-password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <Button>Iniciar Sesión</Button>
                        </div>
                      </form>
                    </TabsContent>
                    <TabsContent value="signup">
                      <form onSubmit={handleSignup}>
                        <div className="grid gap-2">
                          <div className="grid gap-1">
                            <Label htmlFor="name">Nombre</Label>
                            <Input
                              id="name"
                              placeholder="Juan Pérez"
                              type="text"
                              autoCapitalize="words"
                              autoComplete="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                          <div className="grid gap-1">
                            <Label htmlFor="email">Correo Electrónico</Label>
                            <Input
                              id="email"
                              placeholder="nombre@ejemplo.com"
                              type="email"
                              autoCapitalize="none"
                              autoComplete="email"
                              autoCorrect="off"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="grid gap-1">
                            <Label htmlFor="password">Contraseña</Label>
                            <Input
                              id="password"
                              placeholder="********"
                              type="password"
                              autoCapitalize="none"
                              autoComplete="new-password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <Button>Crear Cuenta</Button>
                        </div>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Eventos Destacados
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {[
                {
                  title: "Concierto de Rock",
                  description:
                    "Una noche llena de energía con las mejores bandas.",
                  date: "15 de Julio, 2024",
                  location: "Estadio Nacional",
                },
                {
                  title: "Festival de Comida",
                  description:
                    "Degusta los mejores platillos de chefs reconocidos.",
                  date: "5 de Agosto, 2024",
                  location: "Parque Central",
                },
                {
                  title: "Conferencia Tech",
                  description:
                    "Aprende de los líderes en tecnología e innovación.",
                  date: "20 de Septiembre, 2024",
                  location: "Centro de Convenciones",
                },
              ].map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mt-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Comprar Tickets</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              ¿Por qué EventoTicket?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {[
                {
                  title: "Fácil de usar",
                  description:
                    "Interfaz intuitiva que te permite comprar tickets en minutos.",
                  icon: <Users className="h-10 w-10 mb-4 text-primary" />,
                },
                {
                  title: "Seguro",
                  description:
                    "Transacciones encriptadas y garantía anti-fraude en cada compra.",
                  icon: <Ticket className="h-10 w-10 mb-4 text-primary" />,
                },
                {
                  title: "Amplia selección",
                  description:
                    "Accede a una gran variedad de eventos en tu ciudad y alrededores.",
                  icon: <Calendar className="h-10 w-10 mb-4 text-primary" />,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {feature.icon}
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Listo para vivir experiencias inolvidables?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  No te pierdas los mejores eventos. Compra tus tickets ahora y
                  crea recuerdos que durarán toda la vida.
                </p>
              </div>
              <Button size="lg" className="mt-6">
                Explorar eventos
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 EventoTicket. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}
