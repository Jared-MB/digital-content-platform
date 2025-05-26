import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		ppr: true,
		reactCompiler: true,
		viewTransition: true,
	},
	async redirects() {
		return [
			{
				source: "/perfil",
				destination: "/perfil/biblioteca",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
