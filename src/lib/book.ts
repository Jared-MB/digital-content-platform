"use server";

export interface Book {
	anio: number;
	autor: string;
	titulo: string;
}

export const getBooks = async () => {
	const EVERY_FIVE_MINUTES = 1000 * 60 * 5;

	const response = await fetch("http://localhost:8080/libros", {
		method: "GET",
		next: {
			tags: ["libros"],
			revalidate: EVERY_FIVE_MINUTES,
		},
		cache: "force-cache",
	});
	const data = await response.json();

	const books = Object.values(data) as Book[];

	return books;
};
