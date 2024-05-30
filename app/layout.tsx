import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import Providers from "./providers";
import { Toaster } from "@/components/ui/toaster";

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
			<body className={inter.className}>
				<Providers>{children}</Providers>
				<Toaster />
			</body>
		</html>
	);
}
