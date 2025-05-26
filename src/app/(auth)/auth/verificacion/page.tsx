import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, ArrowLeft } from "lucide-react";

export default function VerificacionPage() {
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
					Verificación de correo
				</h1>
				<p className="text-sm text-muted-foreground">
					Hemos enviado un código de verificación a tu correo electrónico.
					Introdúcelo a continuación para verificar tu cuenta.
				</p>
			</div>

			<div className="grid gap-6">
				<form>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<div className="flex justify-between items-center">
								<Input className="text-center text-lg" maxLength={1} />
								<Input className="text-center text-lg" maxLength={1} />
								<Input className="text-center text-lg" maxLength={1} />
								<Input className="text-center text-lg" maxLength={1} />
								<Input className="text-center text-lg" maxLength={1} />
								<Input className="text-center text-lg" maxLength={1} />
							</div>
							<p className="text-xs text-center text-muted-foreground mt-2">
								El código expirará en 10 minutos
							</p>
						</div>
						<Button type="submit">Verificar</Button>
					</div>
				</form>

				<div className="text-center text-sm">
					¿No recibiste el código? <Button variant="link">Reenviar</Button>
				</div>

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
