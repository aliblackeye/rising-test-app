import Header from "@/layouts/header";
import TransactionsHistory from "./_partials/transactions-history";
import { DataUsagePerNetwork } from "./_partials/data-usage-per-network";
import Metrics from "./_partials/metrics";

export default function Dashboard() {
	return (
		<>
			<Header />
			<Metrics />
			<DataUsagePerNetwork />
			<TransactionsHistory />
		</>
	);
}
