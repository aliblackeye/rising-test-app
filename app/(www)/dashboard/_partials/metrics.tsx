import { dashboardInfo } from "@/lib/actions/dashboard";
import { MetricCard } from "./metric-card";

export default async function Metrics() {
	const info = await dashboardInfo();

	return (
		<section className="metrics flex gap-[28px] mb-[42px] ">
			<MetricCard
				title={<span>Subscription expires on</span>}
				value={<span className="text-2xl">{info.expireTime}</span>}
			/>
			<MetricCard
				title="Last charge"
				value={
					<span>
						<span className="text-2xl">{info.lastChargeAmount}</span>{" "}
						<span className="text-sm">{info.lastCharge}</span>
					</span>
				}
			/>
			<MetricCard
				title={<span className="text-sm font-extrabold">Total Usage Data</span>}
				value={
					<span className="text-2xl font-bold">
						{new Intl.NumberFormat("tr-TR", {
							style: "decimal",
						}).format(Number(info.totalDataUsage))}{" "}
						GB
					</span>
				}
			/>
			<MetricCard
				title={<span className="text-sm font-extrabold">Daily Usage Data</span>}
				value={
					<span className="text-2xl font-bold">
						{new Intl.NumberFormat("tr-TR", {
							style: "decimal",
						}).format(Number(info.dailyUsage))}{" "}
						GB
					</span>
				}
			/>
		</section>
	);
}
