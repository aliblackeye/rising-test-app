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
			<div className="flex min-h-screen flex-col bg-[#f7fafc]">
				<Sidebar />
				<div className="flex flex-col w-full max-w-[892px] max-[1116px]:pl-[124px] ml-[auto] mr-[auto] pb-[21px]">
					{children}
				</div>
			</div>
		);
	}

	return children;
}
