import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export function HeroSection() {
	return (
		<section className="bg-gray-900 py-12 md:py-20">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
					<div className="space-y-4">
						<h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
							Tu biblioteca digital al alcance de tu mano
						</h1>
						<p className="text-white/90 md:text-xl">
							Accede a miles de periódicos, revistas y libros digitales con una
							sola suscripción. Disponible en web, escritorio y dispositivos
							móviles.
						</p>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Button size="lg" asChild>
								<Link href="/auth/registro">Comenzar ahora</Link>
							</Button>
							<Button size="lg" variant="outline" asChild>
								<Link href="/suscripciones">Ver planes</Link>
							</Button>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="relative w-full max-w-md">
							<div className="overflow-hidden rounded-lg border-4 border-white/20 shadow-xl">
								<img
									src="/placeholder.svg?height=600&width=400"
									alt="Dispositivos mostrando la aplicación Quiosco Digital"
									className="w-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
