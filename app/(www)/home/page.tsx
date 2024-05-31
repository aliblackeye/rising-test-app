import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MetricCard from "./_partials/metric-card";

export default function Home() {
	return (
		<main>
			<section className="metrics flex gap-[28px] mb-[42px]">
				<MetricCard />
				<MetricCard />
				<MetricCard />
				<MetricCard />
			</section>
			<section className="mb-[39px]">
				<Card className="h-[443px]">
					<CardHeader>
						<CardTitle>Data usage per network</CardTitle>
					</CardHeader>
					<CardContent>
						<div>{/* Chart goes here */}</div>
					</CardContent>
				</Card>
			</section>
			<section>
				<Card className="h-[357px]">
					<CardHeader>
						<CardTitle>Transactions History</CardTitle>
					</CardHeader>
					<CardContent>
						<div>{/* Table goes here */}</div>
					</CardContent>
				</Card>
			</section>
		</main>
	);
}
