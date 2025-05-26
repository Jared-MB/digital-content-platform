import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const dynamic = "force-dynamic";
export const experimental_ppr = false;

export default function SuscripcionPage() {
	const subscription = {
		plan: "Premium",
		nextBilling: "15 de mayo de 2025",
	};

	return (
		<div>
			<h2 className="text-2xl font-bold" id="suscripcion">
				Mi suscripción
			</h2>
			<p className="text-gray-500">Detalles de tu plan actual</p>

			<Card className="mt-4">
				<CardContent className="p-6">
					<div className="flex flex-col justify-between gap-4 sm:flex-row">
						<div>
							<div className="flex items-center gap-2">
								<h3 className="text-lg font-semibold">
									Plan {subscription.plan}
								</h3>
								<Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
									Activo
								</Badge>
							</div>
							<p className="text-sm text-gray-500">
								Próximo cobro: {subscription.nextBilling}
							</p>
						</div>
						<div className="flex gap-2">
							<Button variant="outline">Cambiar plan</Button>
							<Button
								variant="outline"
								className="text-red-500 hover:text-red-600"
							>
								Cancelar
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
