import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileNavigation } from "@/components/mobile-navigation";
import { Toaster } from "@/components/ui/sonner";
import { NotificationProvider } from "@/contexts/notifications";

export default function MainLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="flex min-h-screen flex-col">
			<NotificationProvider>
				<Header />
				{children}
				<Footer />
				<MobileNavigation />
			</NotificationProvider>
			<Toaster />
		</div>
	);
}
