import {
	PublisherCarousel,
	PublisherCarouselSkeleton,
} from "@/components/publisher-carousel";
import { getEditorials } from "@/lib/editorial";
import { Suspense } from "react";

export function PublishersSection() {
	return (
		<section className="py-12 md:py-16">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							Editoriales destacadas
						</h2>
						<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
							Explora contenido de las mejores editoriales e instituciones
						</p>
					</div>
				</div>
				<Suspense fallback={<PublisherCarouselSkeleton />}>
					<FetchPublishers />
				</Suspense>
			</div>
		</section>
	);
}

async function FetchPublishers() {
	const response = await getEditorials();

	return <PublisherCarousel publishers={response} />;
}
