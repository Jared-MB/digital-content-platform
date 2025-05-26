import { Button } from "@/components/ui/button";
import { Building2, Coffee, LibraryBig, TicketsPlane } from "lucide-react";

export function BusinessModelSection() {
	return (
		<section className="py-12 md:py-16 bg-gray-900 text-white">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
					<div className="space-y-4">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Soluciones para empresas
						</h2>
						<p className="text-gray-300 md:text-xl">
							Ofrece acceso premium a tus clientes y huéspedes. Ideal para
							hoteles, aerolíneas, cafeterías y más.
						</p>
						<Button size="lg">Conoce más</Button>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="rounded-lg bg-gray-800 p-6 text-center">
							<div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<Building2 className="text-primary" />
							</div>
							<h3 className="mb-2 text-lg font-medium">Hoteles</h3>
							<p className="text-sm text-gray-400">
								Mejora la experiencia de tus huéspedes
							</p>
						</div>
						<div className="rounded-lg bg-gray-800 p-6 text-center">
							<div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<TicketsPlane className="text-primary" />
							</div>
							<h3 className="mb-2 text-lg font-medium">Aerolíneas</h3>
							<p className="text-sm text-gray-400">
								Entretenimiento durante el vuelo
							</p>
						</div>
						<div className="rounded-lg bg-gray-800 p-6 text-center">
							<div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<Coffee className="text-primary" />
							</div>
							<h3 className="mb-2 text-lg font-medium">Cafeterías</h3>
							<p className="text-sm text-gray-400">
								Valor añadido para tus clientes
							</p>
						</div>
						<div className="rounded-lg bg-gray-800 p-6 text-center">
							<div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
								<LibraryBig className="text-primary" />
							</div>
							<h3 className="mb-2 text-lg font-medium">Bibliotecas</h3>
							<p className="text-sm text-gray-400">
								Amplía tu catálogo digital
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
