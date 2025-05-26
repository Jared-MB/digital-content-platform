"use server";

import { redirect } from "next/navigation";
import { getUserById } from "../user/queries";
import { verifySession } from "./session";
import { cache } from "react";
import { cookies } from "next/headers";

export const getProfile = cache(async () => {
	await verifySession();
	const email = (await cookies()).get("user-id")?.value;

	if (!email) {
		console.log("No email found");
		return redirect("/auth/login");
	}

	const user = await getUserById(email);
	if (!user) {
		console.log("No user found");
		return redirect("/auth/login");
	}

	return user;
});
