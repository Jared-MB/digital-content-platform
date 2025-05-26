import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { Content } from "@/components/content";

import { Search as SearchInput } from "./search";
import { TypeTabs } from "./tabs";
import { ItemsContent, ItemsContentSkeleton } from "./items-content";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const experimental_ppr = false;

export default function ExplorarPage({
	searchParams,
}: { searchParams: Promise<{ type: string; q: string }> }) {
	return (
		<Content>
			<div className="mb-8">
				<h1 className="text-3xl font-bold">Explorar Contenido</h1>
				<p className="mt-2 text-gray-500">
					Descubre periódicos, revistas y libros digitales
				</p>
			</div>
			<div className="mb-8 flex flex-col gap-4 sm:flex-row">
				<div className="relative flex-1">
					<Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
					<Suspense>
						<SearchInput />
					</Suspense>
				</div>
				<Button variant="outline" className="flex items-center gap-2">
					<Filter className="h-4 w-4" />
					Filtros
				</Button>
			</div>
			<div>
				<TypeTabs />
				<Suspense fallback={<ItemsContentSkeleton />}>
					<ItemsContent searchParams={searchParams} />
				</Suspense>
			</div>
		</Content>
	);
}
