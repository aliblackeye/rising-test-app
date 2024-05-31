import Header from "@/layouts/header";
import MetricCard from "./_partials/metric-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
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

export default function Home() {
	const transactionHistory = [
		{
			type: "Rental",
			location: "United States",
			rentalPeriod: "1 month",
			numberofIP: "10",
			specificPurpose: "Netflix",
			date: "2021-09-01",
		},
	];
	return (
		<>
			<Header />
			<section className="metrics flex gap-[28px] mb-[42px] ">
				<MetricCard />
				<MetricCard />
				<MetricCard />
				<MetricCard />
			</section>
			<section className="mb-[39px]">
				<Card className="h-[443px] p-6">
					<CardHeader className="!p-0">
						<CardTitle className="text-xl leading-5 font-extrabold mb-3">
							Data usage per network
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div>{/* Chart goes here */}</div>
					</CardContent>
				</Card>
			</section>
			<section>
				<Card className="h-[357px] p-6">
					<CardHeader className="!p-0">
						<CardTitle className="text-xl leading-5 font-extrabold mb-3">
							Transactions History
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Type</TableHead>
										<TableHead>Location</TableHead>
										<TableHead>Rental Period</TableHead>
										<TableHead>Number of IP</TableHead>
										<TableHead>SpesificPurpose</TableHead>
										<TableHead>Date</TableHead>
										<TableHead>Actions</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{transactionHistory.map((th) => (
										<TableRow key={th.type}>
											<TableCell>{th.type}</TableCell>
											<TableCell>{th.location}</TableCell>
											<TableCell>{th.rentalPeriod}</TableCell>
											<TableCell>{th.numberofIP}</TableCell>
											<TableCell>{th.specificPurpose}</TableCell>
											<TableCell>{th.date}</TableCell>
											<TableCell>
												<DropdownMenu>
													<DropdownMenuTrigger>
														<Button variant={"ghost"}>
															Actions
															<ChevronDown size={16} />
														</Button>
													</DropdownMenuTrigger>
													<DropdownMenuContent>
														<DropdownMenuLabel>My Account</DropdownMenuLabel>
														<DropdownMenuSeparator />
														<DropdownMenuItem>Profile</DropdownMenuItem>
														<DropdownMenuItem>Billing</DropdownMenuItem>
														<DropdownMenuItem>Team</DropdownMenuItem>
														<DropdownMenuItem>Subscription</DropdownMenuItem>
													</DropdownMenuContent>
												</DropdownMenu>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</CardContent>
				</Card>
			</section>
		</>
	);
}
