"use server";

import { getArticles } from "./articles";
import { getBooks } from "./book";
import { getMagazines } from "./magazines";

export const getContent = async () => {
	const [books, articles, magazines] = await Promise.all([
		getBooks(),
		getArticles(),
		getMagazines(),
	]);

	return [...books, ...articles, ...magazines];
};

export const getContentByName = async (name: string) => {
	const content = await getContent();

	const parsedName = name
		.toLocaleLowerCase()
		.replaceAll("%20", " ")
		.replaceAll("%c3%b1", "ñ");

	const filteredContent = content.find((item) => {
		return (
			(item as any)?.nombre?.toLowerCase() === parsedName ||
			(item as any)?.titulo?.toLowerCase() === parsedName
		);
	});

	if (!filteredContent) {
		return null;
	}

	const relatedContent = content.filter((item) => {
		if ("autor" in item && "autor" in filteredContent) {
			return item?.autor;
		}
		if ("nombre" in item && "nombre" in filteredContent) {
			return item?.nombre;
		}

		if ("editorial" in item && "editorial" in filteredContent) {
			return item?.editorial;
		}
		return false;
	});

	return {
		...filteredContent,
		relatedContent,
	};
};
