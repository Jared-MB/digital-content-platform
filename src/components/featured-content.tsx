import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getBooks, type Book } from "@/lib/book";
import { Skeleton } from "./ui/skeleton";

export async function FeaturedContent() {
	const featuredItems = await getBooks();

	return (
		<div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-4">
			{featuredItems.map((item) => (
				<Link
					key={item.titulo}
					href={`/contenido/${item.titulo}`}
					className="group"
				>
					<Card className="overflow-hidden transition-all hover:shadow-md">
						<div className="aspect-[3/4] overflow-hidden">
							<img
								src={"/placeholder.svg"}
								alt={item.titulo}
								className="h-full w-full object-cover transition-transform group-hover:scale-105"
							/>
						</div>
						<CardContent className="p-4">
							<div className="flex items-center gap-2">
								<Badge
									variant="outline"
									className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
								>
									Libro
								</Badge>
							</div>
							<h3 className="mt-2 line-clamp-2 text-lg font-semibold">
								{item.titulo}
							</h3>
						</CardContent>
						<CardFooter className="border-t p-4 pt-2">
							<p className="text-sm text-gray-500">{item.autor}</p>
						</CardFooter>
					</Card>
				</Link>
			))}
		</div>
	);
}

export function FeaturedContentSkeleton() {
	return (
		<div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-4">
			{Array.from({ length: 6 }).map((_, index) => (
				<div
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					className="group"
				>
					<Card className="overflow-hidden transition-all hover:shadow-md">
						<div className="aspect-[3/4] overflow-hidden">
							<img
								src={"/placeholder.svg"}
								alt="Book Cover"
								className="h-full w-full object-cover transition-transform group-hover:scale-105"
							/>
						</div>
						<CardContent className="p-4">
							<div className="flex items-center gap-2">
								<Badge
									variant="outline"
									className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
								>
									<Skeleton className="h-3 w-10" />
								</Badge>
							</div>
							<h3 className="mt-2 line-clamp-2 text-lg font-semibold">
								<Skeleton className="h-3 w-2/5" />
							</h3>
						</CardContent>
						<CardFooter className="border-t p-4 pt-2">
							<div className="text-sm text-gray-500">
								<Skeleton className="h-3 w-2/3" />
							</div>
						</CardFooter>
					</Card>
				</div>
			))}
		</div>
	);
}
