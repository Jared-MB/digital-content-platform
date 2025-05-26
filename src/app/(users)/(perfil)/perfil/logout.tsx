"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/lib/auth/actions/logout";
import { LogOut } from "lucide-react";

export function Logout() {
	return (
		<Button
			onClick={() => logout()}
			variant="outline"
			className="w-full text-red-500 hover:text-red-600"
		>
			<LogOut className="mr-2 h-4 w-4" />
			Cerrar sesión
		</Button>
	);
}
