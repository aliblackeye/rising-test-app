import SpecialOffer from "./_partials/special-offer";

export default function Header() {
	return (
		<header className="flex flex-col h-[250px]">
			<SpecialOffer />
			<h1 className="font-bold leading-9 text-3xl py-[22px] mb-[24px]">
				Proxies & Scraping Infrastructure
			</h1>
		</header>
	);
}
