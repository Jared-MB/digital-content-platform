import { Button } from "@/components/ui/button";
import { BookOpen, Menu } from "lucide-react";
import Link from "next/link";
import { AuthButtons } from "./auth-buttons";
import { AuthNavigation } from "./auth-navigation";

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white">
			<div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-6">
				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon" className="md:hidden">
						<Menu className="h-6 w-6" />
						<span className="sr-only">Toggle menu</span>
					</Button>
					<Link href="/" className="flex items-center gap-2">
						<BookOpen className="h-6 w-6 text-primary" />
						<span className="text-xl font-bold">Quiosco Digital</span>
					</Link>
				</div>
				<div className="hidden md:flex items-center gap-6">
					<nav className="flex items-center gap-6">
						<Link
							href="/explorar"
							className="text-sm font-medium hover:underline"
						>
							Explorar
						</Link>
						<Link
							href="/suscripciones"
							className="text-sm font-medium hover:underline"
						>
							Suscripciones
						</Link>
						<Link
							href="/editoriales"
							className="text-sm font-medium hover:underline"
						>
							Editoriales
						</Link>
					</nav>
					<AuthButtons />
				</div>
				<AuthNavigation />
			</div>
		</header>
	);
}
