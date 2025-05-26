import { z } from "zod";

export const RegisterUserSchema = z.object({
	name: z.string(),
	lastName: z.string(),
	email: z.string().email(),
	password: z.string().min(8),
	plan: z.enum(["basic", "premium", "familiar"]),
	birthDate: z.string(),
	address: z.string(),
	country: z.string(),
	state: z.string(),
	phone: z.string(),
});
