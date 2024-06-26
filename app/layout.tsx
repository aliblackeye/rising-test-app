import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

const grotesk = Hanken_Grotesk({ subsets: ["latin"] });
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
	title: "Rising",
	description: "A Next.js app with TypeScript and Tailwind CSS",
};

export default function WwwLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={grotesk.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
