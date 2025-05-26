import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, ArrowLeft } from "lucide-react";

export default function RecuperarPasswordPage() {
	return (
		<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div className="flex flex-col space-y-2 text-center">
				<div className="flex justify-center">
					<Link href="/" className="flex items-center gap-2">
						<BookOpen className="h-8 w-8 text-primary" />
						<span className="text-2xl font-bold">Quiosco Digital</span>
					</Link>
				</div>
				<h1 className="text-2xl font-semibold tracking-tight">
					Recuperar contraseña
				</h1>
				<p className="text-sm text-muted-foreground">
					Ingresa tu correo electrónico y te enviaremos un enlace para
					restablecer tu contraseña
				</p>
			</div>

			<div className="grid gap-6">
				<form>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="email">Correo electrónico</Label>
							<Input
								id="email"
								placeholder="nombre@ejemplo.com"
								type="email"
								autoCapitalize="none"
								autoComplete="email"
								autoCorrect="off"
								required
							/>
						</div>
						<Button type="submit">Enviar enlace de recuperación</Button>
					</div>
				</form>

				<div className="text-center">
					<Link
						href="/auth/login"
						className="inline-flex items-center text-sm text-primary hover:text-emerald-700"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						Volver a inicio de sesión
					</Link>
				</div>
			</div>
		</div>
	);
}
