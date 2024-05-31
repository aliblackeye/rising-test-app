import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const DataUsagePerNetwork = () => {
	return (
		<section className="mb-[39px]">
			<Card className="h-[443px] p-6">
				<CardHeader className="!p-0">
					<CardTitle className="text-xl leading-5 font-extrabold mb-3">
						Data usage per network
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="h-[359px]"></div>
				</CardContent>
			</Card>
		</section>
	);
};
