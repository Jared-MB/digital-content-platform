import Link from "next/link";
import { BookOpen } from "lucide-react";

import { LoginForm } from "./login-form";

export default async function LoginPage() {
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
					Bienvenido de nuevo
				</h1>
				<p className="text-sm text-muted-foreground">
					Ingresa tus credenciales para acceder a tu cuenta
				</p>
			</div>
			<div className="grid gap-6">
				<LoginForm />
				<div className="text-center text-sm">
					¿No tienes una cuenta?{" "}
					<Link
						href="/auth/registro"
						className="font-medium text-primary hover:text-emerald-700"
					>
						Regístrate
					</Link>
				</div>
			</div>
		</div>
	);
}
