"use client";

import { useDialogStore } from "@/store/use-dialog-store";
import { IconType } from "react-icons";
import { IoCard, IoHome, IoLogOutOutline, IoPerson } from "react-icons/io5";

export type MENU = {
	key?: string;
	label?: string | JSX.Element;
	icon: IconType;
	href?: string;
	children?: MENU[];
	onClick?: (e: any) => void;
	type?: "divider" | "dashed";
	pageTitle?: string;
	navigationTabs?: {
		key: string;
		label: string;
		href: string;
	}[];
	bottom?: boolean;
	disabled?: boolean;
	resetPadding?: boolean;
};

export const MENU: MENU[] = [
	{
		key: "home",
		label: "Home",
		href: "/dashboard",
		icon: IoHome,
		pageTitle: "Proxies & Scraping Infrastructure",
		navigationTabs: [
			{
				key: "home-my-proxies",
				label: "My Proxies",
				href: "/my-proxies",
			},
			{
				key: "home-dashboard",
				label: "Dashboard",
				href: "/dashboard",
			},
		],
	},
	{
		key: "payment",
		label: "Payment",
		href: "#",
		icon: IoCard,
		pageTitle: "Payment",
	},
	{
		key: "user",
		label: "User",
		href: "#",
		icon: IoPerson,
		pageTitle: "User",
	},
	{
		key: "logout",
		label: "Logout",
		href: "/logout",
		icon: IoLogOutOutline,
		resetPadding: true,
	},
];

export default MENU;
