import {
	FeaturedContent,
	FeaturedContentSkeleton,
} from "@/components/featured-content";
import { Suspense } from "react";

export function FeaturedContentSection() {
	return (
		<section className="py-12 md:py-16 bg-gray-50">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-start space-y-4">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
							Contenido destacado
						</h2>
						<p className="max-w-[700px] text-gray-500 md:text-xl">
							Las publicaciones más populares de esta semana
						</p>
					</div>
				</div>
				<Suspense fallback={<FeaturedContentSkeleton />}>
					<FeaturedContent />
				</Suspense>
			</div>
		</section>
	);
}
