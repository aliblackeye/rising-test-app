"use client";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CreditCard, DoorClosed, Home, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { IoHome, IoCard, IoPerson, IoLogOutOutline } from "react-icons/io5";
export default function Sidebar() {
	const pathname = usePathname();

	const items = useMemo(
		() => [
			{
				name: "Home",
				icon: IoHome,
				href: "/home",
			},
			{
				name: "Payment",
				icon: IoCard,
				href: "/payment",
			},
			{
				name: "User",
				icon: IoPerson,
				href: "/user",
			},
			{
				name: "Logout",
				icon: IoLogOutOutline,
				href: "/logout",
			},
		],
		[]
	);

	return (
		<aside className="fixed inset-y-0 left-0 z-10 w-[98px] flex-col border-r bg-[#f7fafc] sm:flex">
			<nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
				<Link
					href="#"
					className="group flex h-[55px] w-[54px] items-center justify-center gap-2 mb-[34px]">
					<Image
						src={"/images/logo.png"}
						alt="Logo"
						loading="eager"
						width={128}
						height={128}
					/>
				</Link>
				<TooltipProvider>
					{items.map((item, key) => (
						<Tooltip key={key}>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className={cn(
										"flex h-[60px] w-[60px] items-center justify-center rounded-2xl text-muted-foreground transition-colors hover:text-[#0c6dfc]/60",
										pathname === item.href &&
											"text-[#0c6dfc] hover:text-[#0c6dfc] bg-[#78B6FF]/20"
									)}>
									<item.icon className="h-[30px] w-[30px]" />
								</Link>
							</TooltipTrigger>
							<TooltipContent
								side="right"
								sideOffset={26}>
								{item.name}
							</TooltipContent>
						</Tooltip>
					))}
				</TooltipProvider>
			</nav>
		</aside>
	);
}
