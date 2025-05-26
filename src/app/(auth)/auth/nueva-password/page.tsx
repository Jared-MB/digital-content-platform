import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen } from "lucide-react";

export default function NuevaPasswordPage() {
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
					Crear nueva contraseña
				</h1>
				<p className="text-sm text-muted-foreground">
					Introduce tu nueva contraseña para acceder a tu cuenta
				</p>
			</div>

			<div className="grid gap-6">
				<form>
					<div className="grid gap-4">
						<div className="grid gap-2">
							<Label htmlFor="password">Nueva contraseña</Label>
							<Input id="password" type="password" required />
							<p className="text-xs text-muted-foreground">
								Mínimo 8 caracteres, incluyendo una letra mayúscula y un número
							</p>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="confirm-password">Confirmar contraseña</Label>
							<Input id="confirm-password" type="password" required />
						</div>
						<Button type="submit">Guardar nueva contraseña</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
