"use client";

import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter } from "next/navigation";

export function Search() {
	const searchParams = useSearchParams();
	const router = useRouter();

	const handleChange = (value: string) => {
		const params = new URLSearchParams(searchParams.toString());

		if (value === "") {
			params.delete("q");
			router.replace(`/explorar?${params.toString()}`);
			return;
		}

		params.set("q", value);
		router.replace(`/explorar?${params.toString()}`);
	};

	return (
		<Input
			onChange={(e) => handleChange(e.target.value)}
			placeholder="Buscar por título, autor o editorial..."
			className="pl-9"
		/>
	);
}
