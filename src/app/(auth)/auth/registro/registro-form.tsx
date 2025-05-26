"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { plans } from "@/lib/subscription/plans";
import { register } from "@/lib/auth/actions/register";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";

export function RegistroForm() {
	const [hasCompletedFirstStep, setHasCompletedFirstStep] = useState(false);
	const [state, dispatch, isPending] = useActionState(register, undefined);

	return (
		<form className="grid gap-4" action={dispatch}>
			<FirstStep
				className={cn("hidden", !hasCompletedFirstStep && "grid gap-4")}
			/>
			<SecondStep
				back={() => setHasCompletedFirstStep(false)}
				className={cn("hidden", hasCompletedFirstStep && "grid gap-4")}
			/>
			{hasCompletedFirstStep ? (
				<Finish />
			) : (
				<Continue onClick={() => setHasCompletedFirstStep(true)} />
			)}
		</form>
	);
}

function FirstStep({ className }: { className?: string }) {
	const searchParams = useSearchParams();

	const plan = searchParams.get("plan");

	return (
		<div className={className}>
			<div className="grid gap-2">
				<Label htmlFor="plan">Plan</Label>
				<Select name="plan" defaultValue={plan ?? undefined} required>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Selecciona un plan" />
					</SelectTrigger>
					<SelectContent>
						{plans.map((plan) => (
							<SelectItem key={plan.id} value={plan.key.toString()}>
								{plan.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<div className="grid gap-2">
					<Label htmlFor="first-name">Nombre</Label>
					<Input id="first-name" placeholder="Juan" required name="name" />
				</div>
				<div className="grid gap-2">
					<Label htmlFor="last-name">Apellido</Label>
					<Input id="last-name" placeholder="Pérez" required name="lastName" />
				</div>
			</div>
			<div className="grid gap-2">
				<Label htmlFor="email">Correo electrónico</Label>
				<Input
					id="email"
					placeholder="nombre@ejemplo.com"
					name="email"
					type="email"
					autoCapitalize="none"
					autoComplete="email"
					autoCorrect="off"
					required
				/>
			</div>
			<div className="grid gap-2">
				<Label htmlFor="password">Contraseña</Label>
				<Input id="password" type="password" required name="password" />
				<p className="text-xs text-muted-foreground">
					Mínimo 8 caracteres, incluyendo una letra mayúscula y un número
				</p>
			</div>
		</div>
	);
}

function SecondStep({
	className,
	back,
}: { className?: string; back: () => void }) {
	const [date, setDate] = useState<Date | undefined>(new Date());

	return (
		<div className={className}>
			<div className="grid place-items-end">
				<Button variant="ghost" type="button" onClick={back}>
					<ArrowLeft className="h-4 w-4" />
					<span>Volver</span>
				</Button>
			</div>
			<div className="grid gap-2">
				<Label htmlFor="phone">Teléfono</Label>
				<Input id="phone" type="tel" required name="phone" />
			</div>
			<div className="grid gap-2">
				<Label htmlFor="address">Dirección</Label>
				<Input
					id="address"
					placeholder="Calle 123, Colonia 456, Ciudad 789"
					required
					name="address"
				/>
			</div>
			<div className="grid gap-2">
				<Label htmlFor="birthDate">Fecha de nacimiento</Label>
				<Input name="birthDate" type="date" required />
			</div>
			<div className="grid gap-2">
				<Label htmlFor="country">País</Label>
				<Input id="country" type="country" required name="country" />
			</div>
			<div className="grid gap-2">
				<Label htmlFor="state">Estado</Label>
				<Input id="state" type="state" required name="state" />
			</div>
		</div>
	);
}

function Finish() {
	const { pending } = useFormStatus();

	return (
		<Button type="submit" disabled={pending}>
			Crear cuenta
		</Button>
	);
}

function Continue({ onClick }: { onClick: () => void }) {
	return (
		<Button type="button" onClick={onClick}>
			Continuar
		</Button>
	);
}

export function RegistroFormSkeleton() {
	return (
		<form>
			<div className="grid gap-4">
				<div className="grid gap-2">
					<Label htmlFor="plan">Plan</Label>
					<Select disabled>
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Selecciona un plan" />
						</SelectTrigger>
					</Select>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div className="grid gap-2">
						<Label htmlFor="first-name">Nombre</Label>
						<Input id="first-name" placeholder="Juan" disabled />
					</div>
					<div className="grid gap-2">
						<Label htmlFor="last-name">Apellido</Label>
						<Input id="last-name" placeholder="Pérez" disabled />
					</div>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="email">Correo electrónico</Label>
					<Input
						id="email"
						placeholder="nombre@ejemplo.com"
						type="email"
						autoCapitalize="none"
						autoComplete="email"
						autoCorrect="off"
						disabled
					/>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="password">Contraseña</Label>
					<Input id="password" type="password" disabled />
					<p className="text-xs text-muted-foreground">
						Mínimo 8 caracteres, incluyendo una letra mayúscula y un número
					</p>
				</div>
				<Button type="submit" disabled>
					Crear cuenta
				</Button>
			</div>
		</form>
	);
}
