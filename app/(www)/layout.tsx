import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Rising",
	description: "A Next.js app with TypeScript and Tailwind CSS",
};

export default function WwwLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
