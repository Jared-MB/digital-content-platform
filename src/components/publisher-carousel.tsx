"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

export function PublisherCarousel({ publishers }: { publishers: string[] }) {
	const scrollContainerRef = useRef<HTMLDivElement | null>(null);

	const scrollLeft = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		if (scrollContainerRef.current) {
			scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
		}
	};

	return (
		<div className="relative mt-8">
			<div className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 md:-left-6">
				<Button
					variant="outline"
					size="icon"
					className="h-8 w-8 rounded-full bg-white shadow-md md:h-10 md:w-10"
					onClick={scrollLeft}
				>
					<ChevronLeft className="h-4 w-4" />
					<span className="sr-only">Anterior</span>
				</Button>
			</div>
			<div
				ref={scrollContainerRef}
				className="flex gap-4 overflow-x-auto pb-4 pt-4 scrollbar-hide"
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
			>
				{publishers?.map((publisher) => (
					<Card key={publisher} className="min-w-[180px] overflow-hidden">
						<CardContent className="flex h-[120px] flex-col items-center justify-center p-6">
							<img
								src={"/placeholder.svg"}
								alt={publisher}
								className="h-10 object-contain"
							/>
							<h3 className="mt-3 text-center text-sm font-medium">
								{publisher}
							</h3>
						</CardContent>
					</Card>
				))}
			</div>
			<div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 md:-right-6">
				<Button
					variant="outline"
					size="icon"
					className="h-8 w-8 rounded-full bg-white shadow-md md:h-10 md:w-10"
					onClick={scrollRight}
				>
					<ChevronRight className="h-4 w-4" />
					<span className="sr-only">Siguiente</span>
				</Button>
			</div>
		</div>
	);
}

export function PublisherCarouselSkeleton() {
	return (
		<div className="relative mt-8">
			<div className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 md:-left-6">
				<Button
					variant="outline"
					size="icon"
					className="h-8 w-8 rounded-full bg-white shadow-md md:h-10 md:w-10"
				>
					<ChevronLeft className="h-4 w-4" />
					<span className="sr-only">Anterior</span>
				</Button>
			</div>
			<div
				className="flex gap-4 overflow-x-auto pb-4 pt-4 scrollbar-hide"
				style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
			>
				{Array.from({ length: 7 }).map((_, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<Card key={index} className="min-w-[180px] overflow-hidden">
						<CardContent className="flex h-[120px] flex-col items-center justify-center p-6">
							<img
								src={"/placeholder.svg"}
								alt='Editorial "Editorial"'
								className="h-10 object-contain"
							/>
							<h3 className="mt-3 text-center text-sm font-medium">
								<Skeleton className="h-3 w-4/5" />
							</h3>
						</CardContent>
					</Card>
				))}
			</div>
			<div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 md:-right-6">
				<Button
					variant="outline"
					size="icon"
					className="h-8 w-8 rounded-full bg-white shadow-md md:h-10 md:w-10"
				>
					<ChevronRight className="h-4 w-4" />
					<span className="sr-only">Siguiente</span>
				</Button>
			</div>
		</div>
	);
}
