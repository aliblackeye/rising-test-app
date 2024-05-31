interface MetricCardProps {
	title: React.ReactNode;
	value: React.ReactNode;
}

export function MetricCard({ title, value }: MetricCardProps) {
	return (
		<div className="bg-[#E3F5FF] w-[202px] h-[112px] flex flex-col gap-2 p-6 rounded-2xl">
			<span className="text-sm font-semibold leading-5">{title}</span>
			{value}
		</div>
	);
}
