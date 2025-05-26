import { Bell, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { isAuth } from "@/lib/auth/session";
import { Notifications } from "./notifications";

export const dynamic = "force-dynamic";
export const experimental_ppr = false;

export async function AuthNavigation() {
	const auth = await isAuth();

	if (!auth?.isAuth) {
		return null;
	}

	return (
		<div className="flex items-center gap-4">
			<Button variant="ghost" size="icon">
				<Search className="h-5 w-5" />
				<span className="sr-only">Buscar</span>
			</Button>
			<Notifications />
			<Button variant="ghost" size="icon">
				<ShoppingCart className="h-5 w-5" />
				<span className="sr-only">Carrito</span>
			</Button>
			<Link href="/perfil">
				<Button variant="ghost" size="icon">
					<User className="h-5 w-5" />
					<span className="sr-only">Perfil</span>
				</Button>
			</Link>
		</div>
	);
}
