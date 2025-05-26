"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/auth/actions/login";
import Link from "next/link";
import React, { useActionState } from "react";

export function LoginForm() {
	const [state, dispatch, isPending] = useActionState(login, undefined);

	return (
		<form action={dispatch}>
			<div className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="email">Correo electrónico</Label>
					<Input
						id="email"
						name="email"
						placeholder="nombre@ejemplo.com"
						type="email"
						autoCapitalize="none"
						autoComplete="email"
						autoCorrect="off"
						required
					/>
				</div>
				<div className="grid gap-2">
					<div className="flex items-center justify-between">
						<Label htmlFor="password">Contraseña</Label>
						<Link
							href="/auth/recuperar-password"
							className="text-sm font-medium text-primary hover:text-emerald-700"
						>
							¿Olvidaste tu contraseña?
						</Link>
					</div>
					<Input id="password" type="password" name="password" required />
				</div>
				<div className="flex items-center space-x-2">
					<Checkbox id="remember" />
					<label
						htmlFor="remember"
						className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Recordarme
					</label>
				</div>
				<Button type="submit">Iniciar sesión</Button>
			</div>
		</form>
	);
}
