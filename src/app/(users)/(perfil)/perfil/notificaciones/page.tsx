import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export const dynamic = "force-dynamic";
export const experimental_ppr = false;

export default function NotificacionesPage() {
	return (
		<div>
			<h2 className="text-2xl font-bold" id="notificaciones">
				Notificaciones
			</h2>
			<p className="text-gray-500">
				Configura tus preferencias de notificación
			</p>

			<Card className="mt-4">
				<CardHeader>
					<CardTitle>Preferencias de notificación</CardTitle>
					<CardDescription>
						Decide qué notificaciones quieres recibir
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="font-medium">Nuevas publicaciones</p>
								<p className="text-sm text-gray-500">
									Recibe alertas cuando se publique nuevo contenido de tus
									editoriales favoritas
								</p>
							</div>
							<Switch defaultChecked />
						</div>
						<div className="flex items-center justify-between">
							<div>
								<p className="font-medium">Ofertas y promociones</p>
								<p className="text-sm text-gray-500">
									Recibe información sobre descuentos y ofertas especiales
								</p>
							</div>
							<Switch defaultChecked />
						</div>
						<div className="flex items-center justify-between">
							<div>
								<p className="font-medium">Recordatorios de lectura</p>
								<p className="text-sm text-gray-500">
									Recibe recordatorios para continuar con tus lecturas
									pendientes
								</p>
							</div>
							<Switch />
						</div>
						<div className="flex items-center justify-between">
							<div>
								<p className="font-medium">Actualizaciones de la plataforma</p>
								<p className="text-sm text-gray-500">
									Recibe información sobre nuevas funcionalidades y mejoras
								</p>
							</div>
							<Switch defaultChecked />
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
