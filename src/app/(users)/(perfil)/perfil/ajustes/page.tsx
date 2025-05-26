import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export const dynamic = "force-dynamic";
export const experimental_ppr = false;

export default function AjustesPage() {
	const user = {
		name: "Carlos Rodríguez",
		email: "carlos.rodriguez@ejemplo.com",
	};

	return (
		<div>
			<h2 className="text-2xl font-bold" id="ajustes">
				Ajustes de cuenta
			</h2>
			<p className="text-gray-500">Administra tu información personal</p>

			<Card className="mt-4">
				<CardHeader>
					<CardTitle>Información personal</CardTitle>
					<CardDescription>Actualiza tus datos personales</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="grid gap-4 sm:grid-cols-2">
						<div className="space-y-2">
							<Label htmlFor="name">Nombre</Label>
							<Input id="name" defaultValue={user.name} />
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Correo electrónico</Label>
							<Input id="email" type="email" defaultValue={user.email} />
						</div>
					</div>
					<Button className="mt-4">Guardar cambios</Button>
				</CardContent>
			</Card>
		</div>
	);
}
