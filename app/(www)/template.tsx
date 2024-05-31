import Header from "@/layouts/header";
import Sidebar from "@/layouts/sidebar";
import { cookies } from "next/headers";

export default function WwwTemplate({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookie = cookies();
	if (cookie?.get("jwt")) {
		return (
			<div className="flex min-h-screen w-full flex-col bg-[#f7fafc]">
				<Sidebar />
				<div className="flex flex-col mx-auto lg:max-w-[892px] w-full">
					<Header />
					<main>{children}</main>
				</div>
			</div>
		);
	}

	return children;
}
