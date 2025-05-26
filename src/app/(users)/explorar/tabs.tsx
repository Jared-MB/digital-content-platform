"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter, useSearchParams } from "next/navigation";

export function TypeTabs() {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleChange = (value: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("type", value);

		if (value === "todos") {
			params.delete("type");
			router.replace(`/explorar?${params.toString()}`);
			return;
		}
		router.replace(`/explorar?${params.toString()}`);
	};

	return (
		<Tabs defaultValue="todos" className="mb-8" onValueChange={handleChange}>
			<TabsList className="w-full justify-start overflow-auto">
				<TabsTrigger value="todos">Todos</TabsTrigger>
				<TabsTrigger value="revista">Revistas</TabsTrigger>
				<TabsTrigger value="articulo">Artículos</TabsTrigger>
				<TabsTrigger value="libro">Libros</TabsTrigger>
			</TabsList>
		</Tabs>
	);
}
