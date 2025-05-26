"use client";

import { Bell } from "lucide-react";
import { Button } from "./ui/button";
import { useNotifications } from "@/contexts/notifications";
import Link from "next/link";

export function Notifications() {
	const { unreadCount } = useNotifications();

	return (
		<Button variant="ghost" size="icon" className="relative" asChild>
			<Link href="/perfil/notificaciones">
				<Bell className="h-5 w-5" />
				{unreadCount > 0 && (
					<span className="bg-primary absolute -top-1 -right-1 rounded-full p-0.5 size-5 grid place-content-center text-white">
						{unreadCount}
					</span>
				)}
				<span className="sr-only">Notificaciones</span>
			</Link>
		</Button>
	);
}
