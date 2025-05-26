import "server-only";

import { cookies } from "next/headers";
import { cache } from "react";
import { redirect } from "next/navigation";
import { GET } from "@kristall/http";

interface Session {
	valid: boolean;
	email: string;
	rol: string;
	id: string;
}

export const isAuth = cache(async () => {
	try {
		const sessionToken = (await cookies()).get("session");
		const response = await fetch("http://localhost:8081/seguridad/autorizar", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${sessionToken?.value}`,
			},
		});

		const session = await response.json();

		if (!session?.valid) {
			console.log("No session found");
			return { isAuth: false, userId: "" };
		}

		return { isAuth: true, userId: session.id };
	} catch (error) {
		console.log("Error al verificar sesión:", error);
		return { isAuth: false, userId: "" };
	}
});

export const verifySession = cache(async () => {
	try {
		const sessionToken = (await cookies()).get("session");
		const response = await fetch("http://localhost:8081/seguridad/autorizar", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${sessionToken?.value}`,
			},
		});

		const session = await response.json();

		if (!session?.valid) {
			console.log("No session found");
			redirect("/auth/login");
		}

		return { isAuth: true, userId: session.id as string };
	} catch (error) {
		console.log("Error al verificar sesión:", error);
		redirect("/auth/login");
	}
});

export async function createSession(token: string) {
	const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
	const cookieStore = await cookies();

	cookieStore.set("session", token, {
		httpOnly: true,
		secure: true,
		expires: expiresAt,
		sameSite: "lax",
		path: "/",
	});
}

export async function deleteSession() {
	const cookieStore = await cookies();
	cookieStore.delete("session");
	cookieStore.delete("user-id");
}
