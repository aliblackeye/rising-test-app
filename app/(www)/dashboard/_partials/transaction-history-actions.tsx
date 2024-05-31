"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface TransactionHistoryActionsProps {
	item: {
		type: string;
		location: string;
		rental: string;
		ipcount: string;
		purpose: string;
		date: string;
	};
}

export default function TransactionHistoryActions({
	item,
}: TransactionHistoryActionsProps) {
	const handleClick = () => {
		console.log(item?.ipcount);
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={"ghost"}>
					Actions
					<ChevronDown size={16} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Change status</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={handleClick}>Processing</DropdownMenuItem>
				<DropdownMenuItem onClick={handleClick}>In Progress</DropdownMenuItem>
				<DropdownMenuItem onClick={handleClick}>Completed</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
