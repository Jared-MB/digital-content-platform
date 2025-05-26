export default function AuthLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen">
			<div className="container flex h-screen w-screen flex-col items-center justify-center mx-auto">
				{children}
			</div>
		</div>
	);
}
