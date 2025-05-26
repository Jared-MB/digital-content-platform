"use server";

import { redirect } from "next/navigation";
import { deleteSession } from "../session";

export const logout = async () => {
	await deleteSession();
	redirect("/auth/login");
};
