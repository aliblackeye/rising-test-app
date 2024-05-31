import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { transactionsHistory } from "@/lib/actions/dashboard";
import TransactionsHistoryActions from "./transaction-history-actions";

export default async function TransactionsHistory() {
	const transactionHistory = await transactionsHistory();

	return (
		<section>
			<Card className=" p-6">
				<CardHeader className="!p-0">
					<CardTitle className="text-xl leading-5 font-extrabold mb-3">
						Transactions History
					</CardTitle>
				</CardHeader>
				<CardContent>
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
							{transactionHistory?.data?.map((item: any) => {
								return (
									<TableRow key={item.type}>
										<TableCell>{item.type}</TableCell>
										<TableCell>{item.location}</TableCell>
										<TableCell>{item.rental}</TableCell>
										<TableCell>{item.ipcount}</TableCell>
										<TableCell>{item.purpose}</TableCell>
										<TableCell>{item.date}</TableCell>
										<TableCell>
											<TransactionsHistoryActions item={item} />
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</section>
	);
}
