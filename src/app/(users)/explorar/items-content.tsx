import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getArticles } from "@/lib/articles";
import { getBooks } from "@/lib/book";
import { getContent } from "@/lib/content";
import { getMagazines } from "@/lib/magazines";
import Link from "next/link";
import React from "react";

export async function ItemsContent({
	searchParams,
}: { searchParams: Promise<{ type: string; q: string }> }) {
	const params = await searchParams;

	let content;
	if (!params?.type) {
		content = await getContent();
	}

	if (params?.type === "libro") {
		content = await getBooks();
	}
	if (params?.type === "revista") {
		content = await getMagazines();
	}
	if (params?.type === "articulo") {
		content = await getArticles();
	}

	const hasFilter = params?.q;

	if (hasFilter) {
		content = content?.filter((item) => {
			return (
				(item as any)?.nombre?.toLowerCase().includes(params?.q) ||
				(item as any)?.titulo?.toLowerCase().includes(params?.q)
			);
		});
	}

	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{content?.map((item, index) => (
				<Link
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={((item as any)?.titulo ?? (item as any)?.nombre) + index}
					href={`/contenido/${(item as any)?.titulo ?? (item as any)?.nombre}`}
					prefetch={true}
					className="group"
				>
					<Card className="overflow-hidden transition-all hover:shadow-md">
						<div className="aspect-[3/4] overflow-hidden">
							<img
								src={(item as any).image || "/placeholder.svg"}
								alt={(item as any)?.titulo ?? (item as any)?.nombre}
								className="h-full w-full object-cover transition-transform group-hover:scale-105"
							/>
						</div>
						<CardContent className="p-4">
							<div className="flex items-center gap-2">
								<Badge
									variant="outline"
									className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
								>
									{"autor" in item
										? "Libro"
										: "editorial" in item
											? "Revista"
											: "Articulo"}
								</Badge>
							</div>
							<h3 className="mt-2 line-clamp-2 text-lg font-semibold">
								{(item as any)?.titulo ?? (item as any)?.nombre}
							</h3>
						</CardContent>
						<CardFooter className="border-t p-4 pt-2">
							<p className="text-sm text-gray-500">
								{(item as any)?.editorial ?? (item as any)?.autor}
							</p>
						</CardFooter>
					</Card>
				</Link>
			))}
		</div>
	);
}

export function ItemsContentSkeleton() {
	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{Array.from({ length: 8 }).map((_, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<div className="group" key={index}>
					<Card className="overflow-hidden transition-all hover:shadow-md">
						<div className="aspect-[3/4] overflow-hidden">
							<img
								src="/placeholder.svg"
								alt="Placeholder skeleton"
								className="h-full w-full object-cover transition-transform group-hover:scale-105"
							/>
						</div>
						<CardContent className="p-4">
							<div className="flex items-center gap-2">
								<Badge
									variant="outline"
									className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
								>
									<Skeleton className="h-4 w-8" />
								</Badge>
								<Badge
									variant="outline"
									className="bg-gray-50 text-gray-700 hover:bg-gray-100"
								>
									<Skeleton className="h-4 w-8" />
								</Badge>
							</div>
							<h3 className="mt-2 line-clamp-2 text-lg font-semibold">
								<Skeleton className="h-4 w-20" />
							</h3>
						</CardContent>
						<CardFooter className="border-t p-4 pt-2">
							<Skeleton className="h-3 w-20" />
						</CardFooter>
					</Card>
				</div>
			))}
		</div>
	);
}
