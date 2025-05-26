import { Content } from "@/components/content";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { plans } from "@/lib/subscription/plans";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Link from "next/link";

export default function SuscripcionesPage() {
	return (
		<Content>
			<div className="mx-auto max-w-3xl text-center">
				<h1 className="text-3xl font-bold md:text-4xl">
					Planes de suscripción
				</h1>
				<p className="mt-4 text-gray-500 md:text-lg">
					Elige el plan que mejor se adapte a tus necesidades de lectura
				</p>
			</div>

			<div className="mt-12 grid gap-6 md:grid-cols-3">
				{plans.map((plan) => (
					<Card
						key={plan.id}
						className={cn(
							"relative overflow-hidden flex flex-col",
							plan.popular && "border-primary shadow-lg",
						)}
					>
						{plan.popular && (
							<div className="absolute right-0 top-0">
								<div className="bg-primary px-3 py-1 text-xs font-medium text-white">
									Popular
								</div>
							</div>
						)}
						<CardHeader>
							<CardTitle>{plan.name}</CardTitle>
							<CardDescription>{plan.description}</CardDescription>
							<div className="mt-4">
								<span className="text-3xl font-bold">${plan.price} MXN</span>
								<span className="text-gray-500">/{plan.period}</span>
							</div>
						</CardHeader>
						<CardContent className="grow">
							<ul className="space-y-2">
								{plan.features.map((feature, index) => (
									// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
									<li key={index} className="flex items-start">
										<Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
										<span className="text-sm">{feature}</span>
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter>
							<Link href={`/auth/registro?plan=${plan.key}`} className="w-full">
								<Button
									className={`w-full ${plan.popular ? "bg-primary hover:bg-emerald-700" : ""}`}
								>
									Suscribirse
								</Button>
							</Link>
						</CardFooter>
					</Card>
				))}
			</div>

			<div className="mt-16">
				<h2 className="text-2xl font-bold">Soluciones para empresas</h2>
				<p className="mt-2 text-gray-500">
					Ofrecemos planes especiales para hoteles, aerolíneas, cafeterías y
					otras empresas
				</p>

				<div className="mt-8 grid gap-6 md:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Plan Corporativo</CardTitle>
							<CardDescription>
								Ideal para empresas que desean ofrecer acceso a sus empleados
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								<li className="flex items-start">
									<Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
									<span className="text-sm">
										Acceso para múltiples empleados
									</span>
								</li>
								<li className="flex items-start">
									<Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
									<span className="text-sm">
										Contenido especializado por sector
									</span>
								</li>
								<li className="flex items-start">
									<Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
									<span className="text-sm">Facturación unificada</span>
								</li>
								<li className="flex items-start">
									<Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
									<span className="text-sm">Soporte prioritario</span>
								</li>
							</ul>
						</CardContent>
						<CardFooter>
							<Button className="w-full">Contactar con ventas</Button>
						</CardFooter>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Plan para Establecimientos</CardTitle>
							<CardDescription>
								Para hoteles, cafeterías y espacios que desean ofrecer acceso a
								sus clientes
							</CardDescription>
						</CardHeader>
						<CardContent>
							<ul className="space-y-2">
								<li className="flex items-start">
									<Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
									<span className="text-sm">
										Acceso mediante códigos QR o WiFi
									</span>
								</li>
								<li className="flex items-start">
									<Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
									<span className="text-sm">
										Personalización con la marca del establecimiento
									</span>
								</li>
								<li className="flex items-start">
									<Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
									<span className="text-sm">
										Selección de contenido adaptada a su público
									</span>
								</li>
								<li className="flex items-start">
									<Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
									<span className="text-sm">Estadísticas de uso</span>
								</li>
							</ul>
						</CardContent>
						<CardFooter>
							<Button className="w-full">Solicitar demostración</Button>
						</CardFooter>
					</Card>
				</div>
			</div>
		</Content>
	);
}
