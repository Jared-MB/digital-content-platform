"use server";

import { LoginUserSchema } from "../schemas/login";

import { createSession } from "../session";
import { redirect } from "next/navigation";
import { POST } from "@kristall/http";
import { cookies } from "next/headers";

export const login = async (_prevState: unknown, payload: FormData) => {
	const parsedData = LoginUserSchema.safeParse(
		Object.fromEntries(payload.entries()),
	);

	if (!parsedData.success) {
		console.log(parsedData.error);
		return {
			success: false,
			message: "Invalid form data",
		};
	}

	const { email, password } = parsedData.data;

	const response = (await POST(
		"/seguridad/autenticar",
		{
			email: email,
			contrasena: password,
		},
		{ auth: false },
	)) as unknown as { jwTtoken: string };

	if (!response.jwTtoken) {
		return {
			success: false,
			message: "Correo electrónico o contraseña incorrectos",
		};
	}

	await createSession(response.jwTtoken);
	(await cookies()).set("user-id", email, {
		httpOnly: true,
		secure: true,
		expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
		sameSite: "lax",
	});
	redirect("/");
};
