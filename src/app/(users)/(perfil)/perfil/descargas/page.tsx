import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

export const dynamic = "force-dynamic";
export const experimental_ppr = false;

export default function DescargasPage() {
	const downloads = [
		{
			id: 1,
			title: "La revolución de la inteligencia artificial",
			publisher: "Revista Tecnología Hoy",
			image: "/placeholder.svg?height=400&width=300",
			downloadDate: "12 de abril de 2025",
		},
		{
			id: 4,
			title: "Descubrimientos arqueológicos del siglo XXI",
			publisher: "National Geographic",
			image: "/placeholder.svg?height=400&width=300",
			downloadDate: "5 de abril de 2025",
		},
	];

	return (
		<div>
			<h2 className="text-2xl font-bold" id="descargas">
				Mis descargas
			</h2>
			<p className="text-gray-500">Contenido disponible sin conexión</p>

			<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{downloads.map((item) => (
					<Card key={item.id} className="overflow-hidden">
						<div className="aspect-[3/4]">
							<img
								src={item.image || "/placeholder.svg"}
								alt={item.title}
								className="h-full w-full object-cover"
							/>
						</div>
						<CardContent className="p-4">
							<h3 className="line-clamp-2 font-semibold">{item.title}</h3>
							<p className="text-sm text-gray-500">{item.publisher}</p>
							<p className="mt-2 text-xs text-gray-400">
								Descargado: {item.downloadDate}
							</p>
							<div className="mt-4 flex gap-2">
								<Button className="flex-1">Leer</Button>
								<Button variant="outline" size="icon">
									<Download className="h-4 w-4" />
									<span className="sr-only">Descargar de nuevo</span>
								</Button>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
