import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export const dynamic = "force-dynamic";
export const experimental_ppr = false;

export default function BibliotecaPage() {
	const recentlyRead = [
		{
			id: 1,
			title: "La revolución de la inteligencia artificial",
			publisher: "Revista Tecnología Hoy",
			image: "/placeholder.svg?height=400&width=300",
			progress: 75,
			lastRead: "Hace 2 días",
		},
		{
			id: 2,
			title: "Economía circular: El futuro sostenible",
			publisher: "El Economista",
			image: "/placeholder.svg?height=400&width=300",
			progress: 30,
			lastRead: "Hace 1 semana",
		},
		{
			id: 3,
			title: "Cien años de soledad (Edición especial)",
			publisher: "Editorial Literatura",
			image: "/placeholder.svg?height=400&width=300",
			progress: 45,
			lastRead: "Hace 3 días",
		},
	];

	return (
		<div>
			<h2 className="text-2xl font-bold" id="biblioteca">
				Mi biblioteca
			</h2>
			<p className="text-gray-500">Continúa leyendo donde lo dejaste</p>

			<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{recentlyRead.map((item) => (
					<Card key={item.id} className="overflow-hidden">
						<div className="relative aspect-[3/4]">
							<img
								src={item.image || "/placeholder.svg"}
								alt={item.title}
								className="h-full w-full object-cover"
							/>
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
								<div className="flex items-center justify-between">
									<div className="text-xs">{item.progress}% completado</div>
									<div className="text-xs">{item.lastRead}</div>
								</div>
								<div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-white/30">
									<div
										className="h-full bg-emerald-500"
										style={{ width: `${item.progress}%` }}
									/>
								</div>
							</div>
						</div>
						<CardContent className="p-4">
							<h3 className="line-clamp-2 font-semibold">{item.title}</h3>
							<p className="text-sm text-gray-500">{item.publisher}</p>
							<Button className="mt-4 w-full">Continuar leyendo</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
