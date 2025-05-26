import ContentCategories from "@/components/content-categories";

export function CategoriesSection() {
	return (
		<section className="py-12 md:py-16">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-start space-y-4">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
							Explora por categorías
						</h2>
						<p className="max-w-[700px] text-gray-500 md:text-xl">
							Encuentra el contenido que más te interesa
						</p>
					</div>
				</div>
				<ContentCategories />
			</div>
		</section>
	);
}
