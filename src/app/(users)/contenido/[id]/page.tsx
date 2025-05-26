import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Heart, Share2, BookOpen } from "lucide-react";
import { Content } from "@/components/content";
import { getContentByName } from "@/lib/content";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const experimental_ppr = false;

export default async function ContenidoPage({
	params,
}: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const content = await getContentByName(id);

	if (!content) {
		return null;
	}

	return (
		<Content>
			<div className="mb-6">
				<Link
					href="/explorar"
					className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900"
				>
					<ArrowLeft className="mr-2 h-4 w-4" />
					Volver a explorar
				</Link>
			</div>

			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				<div className="lg:col-span-1">
					<div className="sticky top-24">
						<div className="overflow-hidden rounded-lg border">
							<img
								src="/placeholder.svg"
								alt={(content as any)?.titulo ?? (content as any)?.nombre}
								className="h-full w-full object-cover"
							/>
						</div>
						<div className="mt-6 flex gap-4">
							<Button className="flex-1">Comprar por 99 MXN</Button>
							<Button variant="outline" size="icon">
								<Heart className="h-5 w-5" />
								<span className="sr-only">Añadir a favoritos</span>
							</Button>
							<Button variant="outline" size="icon">
								<Share2 className="h-5 w-5" />
								<span className="sr-only">Compartir</span>
							</Button>
						</div>
						<Button variant="outline" className="mt-4 w-full">
							<BookOpen className="mr-2 h-5 w-5" />
							Vista previa
						</Button>
					</div>
				</div>

				<div className="lg:col-span-2">
					<div className="space-y-6">
						<div>
							<div className="flex flex-wrap gap-2">
								<Badge
									variant="outline"
									className="bg-emerald-50 text-emerald-700"
								>
									{"autor" in content
										? "Libro"
										: "nombre" in content
											? "Revista"
											: "Articulo"}
								</Badge>
							</div>
							<h1 className="mt-2 text-3xl font-bold md:text-4xl">
								{(content as any)?.titulo ?? (content as any)?.nombre}
							</h1>
							<div className="mt-2 text-gray-500">
								<p>
									{(content as any)?.fecha_publicacion ??
										(content as any)?.anio}
								</p>
								{(content as any)?.autor && (
									<p className="mt-1">Por {(content as any)?.autor}</p>
								)}
							</div>
						</div>

						<Tabs defaultValue="descripcion">
							<TabsList className="w-full justify-start">
								<TabsTrigger value="descripcion">Descripción</TabsTrigger>
								<TabsTrigger value="detalles">Detalles</TabsTrigger>
							</TabsList>
							<TabsContent value="descripcion" className="mt-4 space-y-4">
								<p className="text-gray-700">{(content as any)?.description}</p>
								<p className="text-gray-700">
									Este número también incluye una sección especial sobre ética
									en la IA, analizando las implicaciones sociales y morales del
									desarrollo tecnológico acelerado. Los expertos debaten sobre
									la regulación necesaria y cómo podemos asegurar que estas
									tecnologías beneficien a toda la humanidad.
								</p>
								<p className="text-gray-700">
									Además, presentamos un análisis detallado de las últimas
									investigaciones en aprendizaje automático y redes neuronales,
									con ejemplos prácticos de aplicaciones en diversos sectores
									industriales.
								</p>
							</TabsContent>
							<TabsContent value="detalles" className="mt-4">
								<div className="grid grid-cols-2 gap-4 text-sm">
									<div className="space-y-1">
										<p className="font-medium">Editorial</p>
										<p className="text-gray-500">
											{(content as any)?.editorial ?? "Desconocido"}
										</p>
									</div>
									<div className="space-y-1">
										<p className="font-medium">Fecha de publicación</p>
										<p className="text-gray-500">
											{(content as any)?.fecha_publicacion ??
												(content as any)?.anio ??
												"Desconocido"}
										</p>
									</div>
									<div className="space-y-1">
										<p className="font-medium">Idioma</p>
										<p className="text-gray-500">
											{(content as any)?.language ?? "Desconocido"}
										</p>
									</div>
									<div className="space-y-1">
										<p className="font-medium">Páginas</p>
										<p className="text-gray-500">
											{(content as any)?.pages ?? "Desconocido"}
										</p>
									</div>
									<div className="space-y-1">
										<p className="font-medium">Formato</p>
										<p className="text-gray-500">Digital (PDF, EPUB)</p>
									</div>
								</div>
							</TabsContent>
						</Tabs>

						<div className="space-y-4">
							<h2 className="text-2xl font-bold">Contenido relacionado</h2>
							<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
								{content.relatedContent.map((item, index) => (
									<Link
										key={(item as any)?.titulo ?? (item as any)?.nombre + index}
										href={`/contenido/${(item as any)?.titulo ?? (item as any)?.nombre}`}
										className="group"
									>
										<Card className="overflow-hidden transition-all hover:shadow-md">
											<div className="aspect-[3/4] overflow-hidden">
												<img
													src="/placeholder.svg"
													alt={(item as any)?.titulo ?? (item as any)?.nombre}
													className="h-full w-full object-cover transition-transform group-hover:scale-105"
												/>
											</div>
											<CardContent className="p-4">
												<div className="flex items-center gap-2">
													<Badge
														variant="outline"
														className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
													>
														{"autor" in item
															? "Libro"
															: "nombre" in item
																? "Revista"
																: "Articulo"}
													</Badge>
												</div>
												<h3 className="mt-2 line-clamp-2 text-sm font-semibold">
													{(item as any)?.titulo ?? (item as any)?.nombre}
												</h3>
												<p className="mt-1 text-xs text-gray-500">
													{(item as any)?.autor && (
														<span className="mt-1">
															Por {(content as any)?.autor}
														</span>
													)}
													{(item as any)?.editorial && (
														<span className="mt-1">
															Editorial: {(item as any)?.editorial}
														</span>
													)}
												</p>
											</CardContent>
										</Card>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Content>
	);
}
