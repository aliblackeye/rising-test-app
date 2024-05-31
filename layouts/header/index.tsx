"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SpecialOffer from "./_partials/special-offer";

import { Separator } from "@/components/ui/separator";
import MENU from "../menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

export default function Header() {
	const pathname = usePathname();
	const activeMenu = useMemo(
		() => MENU.find((m) => m.href === pathname),
		[pathname]
	);

	// States
	const [visible, setVisible] = useState(true);

	return (
		<header className="flex flex-col max-h-[250px] px-[40px] md:mb-[66px] max-w-[892px] w-full mx-auto">
			{visible && <SpecialOffer setVisible={setVisible} />}
			<h1 className="font-bold leading-6 text-xl py-[22px] md:mb-[24px] md:text-3xl md:leading-9 ">
				{activeMenu?.pageTitle}
			</h1>

			<div className="flex gap-7">
				{activeMenu?.navigationTabs?.map((m) => (
					<div
						key={m.key}
						className={cn(
							m.key,
							"pb-[9px] border-b-[3px] border-b-transparent cursor-pointer transition-colors duration-200 hover:border-b-[#0C6DFC]/50 font-medium md:text-xl ",
							m.href === pathname &&
								"border-b-[#0C6DFC] hover:border-b-[#0C6DFC]"
						)}>
						{m.label}
					</div>
				))}
			</div>
			<Separator className="w-full" />
		</header>
	);
}
