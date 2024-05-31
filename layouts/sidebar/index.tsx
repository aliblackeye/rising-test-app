"use client";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { logout } from "@/lib/actions/auth";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { IoHome, IoCard, IoPerson, IoLogOutOutline } from "react-icons/io5";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useDialogStore } from "@/store/use-dialog-store";
import MENU from "../menu";

export default function Sidebar() {
	const pathname = usePathname();

	const router = useRouter();

	const {
		setDialogVisible,
		setDialogConfirm,
		setDialogDescription,
		setDialogTitle,
	} = useDialogStore();

	return (
		<aside className="fixed inset-y-0 left-0 z-10 w-[98px] flex-col border-r bg-[#f7fafc]">
			<nav className="flex flex-col items-center gap-4 px-2 py-[26px]">
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
					{MENU.map((item, key) => (
						<Tooltip key={key}>
							<TooltipTrigger asChild>
								<Link
									onClick={
										item.key === "logout"
											? (e) => {
													console.log("Logout");
													setDialogVisible(true);
													setDialogTitle("Are you logging out?");
													setDialogDescription("This action cannot be undone.");
													setDialogConfirm(() => {
														logout();
														router.refresh();
													});
											  }
											: undefined
									}
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
								{item.label}
							</TooltipContent>
						</Tooltip>
					))}
				</TooltipProvider>
			</nav>
		</aside>
	);
}
