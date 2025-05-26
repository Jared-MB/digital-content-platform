"use server";

interface Magazine {
	anio: number;
	editorial: string;
	titulo: string;
}

export const getMagazines = async (): Promise<Magazine[]> => {
	const EVERY_FIVE_MINUTES = 1000 * 60 * 5;
	const response = await fetch("http://localhost:8080/revistas", {
		method: "GET",
		next: {
			tags: ["revistas"],
			revalidate: EVERY_FIVE_MINUTES,
		},
		cache: "force-cache",
	});
	const data = await response.json();

	const magazines = Object.values(data) as Magazine[];

	return magazines;
};
