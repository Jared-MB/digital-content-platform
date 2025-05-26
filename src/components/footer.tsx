import { BookOpen } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t bg-white">
			<div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6 mx-auto">
				<div className="flex flex-col md:flex-row justify-between gap-8">
					<div className="space-y-4">
						<Link href="/" className="flex items-center gap-2">
							<BookOpen className="h-6 w-6 text-primary" />
							<span className="text-xl font-bold">Quiosco Digital</span>
						</Link>
						<p className="text-sm text-gray-500 max-w-xs">
							Tu plataforma integral para la suscripción y consumo de
							periódicos, revistas y libros en formato digital.
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
						<div className="space-y-3">
							<h3 className="text-sm font-medium">Plataforma</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="#"
										className="text-sm text-gray-500 hover:text-gray-900"
									>
										Explorar
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-sm text-gray-500 hover:text-gray-900"
									>
										Suscripciones
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-sm text-gray-500 hover:text-gray-900"
									>
										Editoriales
									</Link>
								</li>
							</ul>
						</div>
						<div className="space-y-3">
							<h3 className="text-sm font-medium">Cuenta</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/login"
										className="text-sm text-gray-500 hover:text-gray-900"
									>
										Iniciar Sesión
									</Link>
								</li>
								<li>
									<Link
										href="/registrarse"
										className="text-sm text-gray-500 hover:text-gray-900"
									>
										Registrarse
									</Link>
								</li>
								<li>
									<Link
										href="/perfil"
										className="text-sm text-gray-500 hover:text-gray-900"
									>
										Gestionar Perfil
									</Link>
								</li>
							</ul>
						</div>
						<div className="space-y-3">
							<h3 className="text-sm font-medium">Empresas</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="#"
										className="text-sm text-gray-500 hover:text-gray-900"
									>
										Soluciones
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-sm text-gray-500 hover:text-gray-900"
									>
										Contacto
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-sm text-gray-500 hover:text-gray-900"
									>
										Precios
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-between items-center border-t pt-6">
					<p className="text-xs text-gray-500">
						© 2025 Quiosco Digital. Todos los derechos reservados.
					</p>
					<div className="flex items-center gap-4 mt-4 md:mt-0">
						<Link
							href="#"
							className="text-xs text-gray-500 hover:text-gray-900"
						>
							Términos
						</Link>
						<Link
							href="#"
							className="text-xs text-gray-500 hover:text-gray-900"
						>
							Privacidad
						</Link>
						<Link
							href="#"
							className="text-xs text-gray-500 hover:text-gray-900"
						>
							Cookies
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
