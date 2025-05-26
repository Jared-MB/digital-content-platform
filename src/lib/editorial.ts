"use server";

import { getMagazines } from "./magazines";

export const getEditorials = async () => {
	const response = await getMagazines();
	const editorials = response.map((magazine) => magazine.editorial);
	const uniqueEditorials = [...new Set(editorials)];

	return uniqueEditorials.sort((a, b) => a.localeCompare(b));
};
