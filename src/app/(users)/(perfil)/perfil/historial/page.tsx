import { Card, CardContent } from "@/components/ui/card";

export const dynamic = "force-dynamic";
export const experimental_ppr = false;

export default function HistorialPage() {
	const purchaseHistory = [
		{
			id: "ORD-2025-04-12",
			date: "12 de abril de 2025",
			amount: "4.99",
			items: ["La revolución de la inteligencia artificial"],
		},
		{
			id: "ORD-2025-04-05",
			date: "5 de abril de 2025",
			amount: "4.99",
			items: ["Descubrimientos arqueológicos del siglo XXI"],
		},
		{
			id: "ORD-2025-03-15",
			date: "15 de marzo de 2025",
			amount: "19.99",
			items: ["Renovación de suscripción Premium"],
		},
	];

	return (
		<div>
			<h2 className="text-2xl font-bold" id="historial">
				Historial de compras
			</h2>
			<p className="text-gray-500">Registro de tus transacciones</p>

			<div className="mt-6">
				<Card>
					<CardContent className="p-6">
						<div className="space-y-4">
							{purchaseHistory.map((purchase) => (
								<div
									key={purchase.id}
									className="flex flex-col justify-between border-b pb-4 last:border-0 sm:flex-row"
								>
									<div>
										<p className="font-medium">{purchase.items.join(", ")}</p>
										<p className="text-sm text-gray-500">{purchase.date}</p>
									</div>
									<div className="mt-2 sm:mt-0 sm:text-right">
										<p className="font-medium">{purchase.amount}€</p>
										<p className="text-xs text-gray-500">
											Pedido #{purchase.id}
										</p>
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
