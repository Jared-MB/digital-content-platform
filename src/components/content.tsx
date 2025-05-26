export function Content({ children }: { children: React.ReactNode }) {
	return (
		<div className="container px-4 py-8 md:px-6 md:py-12 mx-auto">
			{children}
		</div>
	);
}
