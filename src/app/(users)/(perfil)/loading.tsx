import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Content } from "@/components/content";
import { NavigationSkeleton } from "./perfil/navigation";

export default async function PerfilLoading() {
	return (
		<Content>
			<div className="grid gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[240px_1fr]">
				<NavigationSkeleton />
				<div className="space-y-8">
					<Tabs defaultValue="biblioteca">
						<TabsList className="w-full justify-start overflow-auto">
							<TabsTrigger value="biblioteca">Mi biblioteca</TabsTrigger>
							<TabsTrigger value="descargas">Mis descargas</TabsTrigger>
							<TabsTrigger value="historial">Historial</TabsTrigger>
							<TabsTrigger value="cuenta">Cuenta</TabsTrigger>
						</TabsList>

						<TabsContent value="biblioteca" className="mt-6">
							<h2 className="text-2xl font-bold" id="biblioteca">
								Mi biblioteca
							</h2>
							<p className="text-gray-500">Continúa leyendo donde lo dejaste</p>
						</TabsContent>

						<TabsContent value="descargas" className="mt-6">
							<h2 className="text-2xl font-bold" id="descargas">
								Mis descargas
							</h2>
							<p className="text-gray-500">Contenido disponible sin conexión</p>
						</TabsContent>

						<TabsContent value="historial" className="mt-6">
							<h2 className="text-2xl font-bold" id="historial">
								Historial de compras
							</h2>
							<p className="text-gray-500">Registro de tus transacciones</p>

							<div className="mt-8">
								<h2 className="text-2xl font-bold" id="suscripcion">
									Mi suscripción
								</h2>
								<p className="text-gray-500">Detalles de tu plan actual</p>

								<Card className="mt-4">
									<CardContent className="p-6">
										<div className="flex flex-col justify-between gap-4 sm:flex-row">
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
						</TabsContent>

						<TabsContent value="cuenta" className="mt-6">
							<div className="space-y-8">
								<div>
									<h2 className="text-2xl font-bold" id="ajustes">
										Ajustes de cuenta
									</h2>
									<p className="text-gray-500">
										Administra tu información personal
									</p>

									<Card className="mt-4">
										<CardHeader>
											<CardTitle>Información personal</CardTitle>
											<CardDescription>
												Actualiza tus datos personales
											</CardDescription>
										</CardHeader>
										<CardContent>
											<Button className="mt-4">Guardar cambios</Button>
										</CardContent>
									</Card>
								</div>

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
															Recibe alertas cuando se publique nuevo contenido
															de tus editoriales favoritas
														</p>
													</div>
													<Switch defaultChecked />
												</div>
												<div className="flex items-center justify-between">
													<div>
														<p className="font-medium">Ofertas y promociones</p>
														<p className="text-sm text-gray-500">
															Recibe información sobre descuentos y ofertas
															especiales
														</p>
													</div>
													<Switch defaultChecked />
												</div>
												<div className="flex items-center justify-between">
													<div>
														<p className="font-medium">
															Recordatorios de lectura
														</p>
														<p className="text-sm text-gray-500">
															Recibe recordatorios para continuar con tus
															lecturas pendientes
														</p>
													</div>
													<Switch />
												</div>
												<div className="flex items-center justify-between">
													<div>
														<p className="font-medium">
															Actualizaciones de la plataforma
														</p>
														<p className="text-sm text-gray-500">
															Recibe información sobre nuevas funcionalidades y
															mejoras
														</p>
													</div>
													<Switch defaultChecked />
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</Content>
	);
}
