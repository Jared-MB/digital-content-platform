"use server";

interface Article {
	departamento: string;
	descripcion: string;
	marca: string;
	nombre: string;
}

export const getArticles = async () => {
	const EVERY_FIVE_MINUTES = 1000 * 60 * 5;
	const response = await fetch("http://localhost:8080/articulos", {
		method: "GET",
		next: {
			tags: ["articulos"],
			revalidate: EVERY_FIVE_MINUTES,
		},
		cache: "force-cache",
	});
	const data = await response.json();

	const articles = Object.values(data) as Article[];

	return articles;
};
