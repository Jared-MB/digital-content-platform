import { Content } from "@/components/content";
import { Navigation, NavigationSkeleton } from "./navigation";
import { verifySession } from "@/lib/auth/session";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const experimental_ppr = false;

export default async function ProfileLayout({
	children,
}: { children: React.ReactNode }) {
	await verifySession();

	return (
		<Content>
			<div className="grid gap-8 md:grid-cols-[240px_1fr] lg:grid-cols-[240px_1fr]">
				<Suspense fallback={<NavigationSkeleton />}>
					<Navigation />
				</Suspense>
				{children}
			</div>
		</Content>
	);
}
