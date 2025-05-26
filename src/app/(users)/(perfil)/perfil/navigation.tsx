import { Button } from "@/components/ui/button";
import {
	Bell,
	BookOpen,
	CreditCard,
	Download,
	History,
	Settings,
} from "lucide-react";
import { Logout } from "./logout";
import { getProfile } from "@/lib/auth/profile";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export async function Navigation() {
	const user = await getProfile();

	return (
		<div className="hidden md:block">
			<div className="sticky top-24 space-y-4">
				<div className="flex items-center space-x-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
						{user.name.charAt(0)}
					</div>
					<div>
						<p className="font-medium">{user.name}</p>
						<p className="text-xs text-gray-500">{user.email}</p>
					</div>
				</div>
				<div className="space-y-1">
					<Button variant="ghost" className="w-full justify-start" asChild>
						<Link href="/perfil/biblioteca">
							<BookOpen className="mr-2 h-4 w-4" />
							Mi biblioteca
						</Link>
					</Button>
					<Button variant="ghost" className="w-full justify-start" asChild>
						<Link href="/perfil/descargas">
							<Download className="mr-2 h-4 w-4" />
							Mis descargas
						</Link>
					</Button>
					<Button variant="ghost" className="w-full justify-start" asChild>
						<Link href="/perfil/historial">
							<History className="mr-2 h-4 w-4" />
							Historial de compras
						</Link>
					</Button>
					<Button variant="ghost" className="w-full justify-start" asChild>
						<Link href="/perfil/suscripcion">
							<CreditCard className="mr-2 h-4 w-4" />
							Mi suscripción
						</Link>
					</Button>
					<Button variant="ghost" className="w-full justify-start" asChild>
						<Link href="/perfil/notificaciones">
							<Bell className="mr-2 h-4 w-4" />
							Notificaciones
						</Link>
					</Button>
					<Button variant="ghost" className="w-full justify-start" asChild>
						<Link href="/perfil/ajustes">
							<Settings className="mr-2 h-4 w-4" />
							Ajustes de cuenta
						</Link>
					</Button>
				</div>
				<Logout />
			</div>
		</div>
	);
}

export function NavigationSkeleton() {
	return (
		<div className="hidden md:block">
			<div className="sticky top-24 space-y-4">
				<div className="flex items-center space-x-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
						<Skeleton className="h-full w-full" />
					</div>
					<div className="space-y-1">
						<Skeleton className="h-4 w-20" />
						<Skeleton className="h-3 w-14" />
					</div>
				</div>
				<div className="space-y-6">
					<Skeleton className="h-5 w-3/4" />
					<Skeleton className="h-5 w-3/4" />
					<Skeleton className="h-5 w-5/6" />
					<Skeleton className="h-5 w-3/4" />
					<Skeleton className="h-5 w-3/4" />
					<Skeleton className="h-5 w-5/6" />
				</div>
				<Skeleton className="w-full h-9" />
			</div>
		</div>
	);
}
