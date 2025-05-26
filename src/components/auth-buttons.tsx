import Link from "next/link";
import { Button } from "./ui/button";
import { isAuth } from "@/lib/auth/session";

export const dynamic = "force-dynamic";
export const experimental_ppr = false;

export async function AuthButtons() {
	const auth = await isAuth();

	if (auth?.isAuth) {
		return null;
	}

	return (
		<div className="ml-auto flex gap-2">
			<Button asChild variant="outline">
				<Link href="/auth/login">Iniciar sesión</Link>
			</Button>
			<Button asChild>
				<Link href="/auth/registro">Registrarse</Link>
			</Button>
		</div>
	);
}
