"use client";

import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Point,
	ChartData,
} from "chart.js";
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const data: ChartData<"line", (number | Point | null)[], unknown> = {
	labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	datasets: [
		{
			label: "My First Dataset",
			data: [1, 3, 5, 10],
			fill: false,
			borderColor: "#1C1C1C",
			borderWidth: 3,
			tension: 0.4,
			pointBorderWidth: 0,
		},
	],
};
export const DataUsagePerNetwork = () => {
	return (
		<section className="mb-[39px] w-full">
			<Card className="h-fit p-6">
				<CardHeader className="!p-0">
					<CardTitle className="text-xl leading-5 font-extrabold mb-3">
						Data usage per network
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="h-max w-full">
						<Line
							className="w-full"
							options={{}}
							data={data}
						/>
					</div>
				</CardContent>
			</Card>
		</section>
	);
};
