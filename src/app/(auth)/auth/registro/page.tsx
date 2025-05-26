import Link from "next/link";
import { BookOpen } from "lucide-react";
import { RegistroForm, RegistroFormSkeleton } from "./registro-form";
import { Suspense } from "react";

export default function RegistroPage() {
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
					Crea tu cuenta
				</h1>
				<p className="text-sm text-muted-foreground">
					Regístrate para acceder a miles de publicaciones digitales
				</p>
			</div>

			<div className="grid gap-6">
				<Suspense fallback={<RegistroFormSkeleton />}>
					<RegistroForm />
				</Suspense>
				<div className="text-center text-sm">
					¿Ya tienes una cuenta?{" "}
					<Link
						href="/auth/login"
						className="font-medium text-primary hover:text-emerald-700"
					>
						Inicia sesión
					</Link>
				</div>
			</div>
		</div>
	);
}
