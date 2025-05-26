"use server";

import { randomUUID } from "node:crypto";

import { addUser } from "@/lib/user/queries";

import { toRawUser } from "@/lib/user/adapters/user";
import { RegisterUserSchema } from "../schemas/register";

import * as bcrypt from "bcrypt";
import { createSession } from "../session";
import { redirect } from "next/navigation";
import type { User } from "@/lib/user/types";
import { POST } from "@kristall/http";

export const register = async (_prevState: unknown, payload: FormData) => {
	const data = Object.fromEntries(payload.entries());

	const parsedData = RegisterUserSchema.safeParse(data);

	if (!parsedData.success) {
		console.log(parsedData.error);
		return;
	}

	const user: User = {
		...parsedData.data,
		name: `${parsedData.data.name} ${parsedData.data.lastName}`,
		password: parsedData.data.password,
		birthDate: new Date(parsedData.data.birthDate),
		id: randomUUID().toString(),
		cardNumber: Math.floor(Math.random() * 1000000).toString(),
		subscriptionState: true,
		favoriteEditorials: [],
		role: `cliente:${parsedData.data.plan}`,
	};

	const response = await fetch("http://localhost:8083/usuario", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(toRawUser(user)),
	});

	if (!response.ok) {
		return;
	}

	redirect("/auth/login");
};
