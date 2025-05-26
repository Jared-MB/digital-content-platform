"use client";

import Link from "next/link";
import { Home, Search, BookOpen, ShoppingCart, User } from "lucide-react";

export function MobileNavigation() {
	return (
		<div className="fixed bottom-0 left-0 z-50 w-full border-t bg-white md:hidden">
			<div className="flex h-16 items-center justify-around">
				<Link href="/" className="flex flex-col items-center justify-center">
					<Home className="h-6 w-6" />
					<span className="text-xs">Inicio</span>
				</Link>
				<Link
					href="/explorar"
					className="flex flex-col items-center justify-center"
				>
					<Search className="h-6 w-6" />
					<span className="text-xs">Explorar</span>
				</Link>
				<Link
					href="/biblioteca"
					className="flex flex-col items-center justify-center"
				>
					<BookOpen className="h-6 w-6" />
					<span className="text-xs">Biblioteca</span>
				</Link>
				<Link
					href="/carrito"
					className="flex flex-col items-center justify-center"
				>
					<ShoppingCart className="h-6 w-6" />
					<span className="text-xs">Carrito</span>
				</Link>
				<Link
					href="/auth/login"
					className="flex flex-col items-center justify-center"
				>
					<User className="h-6 w-6" />
					<span className="text-xs">Perfil</span>
				</Link>
			</div>
		</div>
	);
}
