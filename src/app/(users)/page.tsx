import { HeroSection } from "@/components/main/hero-section";
import { PublishersSection } from "@/components/main/publishers-section";
import { FeaturedContentSection } from "@/components/main/featured-content-section";
import { CategoriesSection } from "@/components/main/categories-section";
import { BusinessModelSection } from "@/components/main/business-model-section";

export default function HomePage() {
	return (
		<main className="flex-1">
			<HeroSection />
			<PublishersSection />
			<FeaturedContentSection />
			<CategoriesSection />
			<BusinessModelSection />
		</main>
	);
}
