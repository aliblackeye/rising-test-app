"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useCallback } from "react";

interface SpecialOfferProps {
	setVisible: (visible: boolean) => void;
}

export default function SpecialOffer({ setVisible }: SpecialOfferProps) {
	const handleClose = useCallback(() => {
		setVisible(false);
	}, []);
	return (
		<div className="special-offer bg-[#78B6FF]/30 p-4 pl-[22px] pr-[24px] flex justify-between mt-[21px] rounded-[5px] mb-9">
			<p className="text-sm font-medium">
				Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit card.{" "}
				<Link
					href={"#"}
					className="underline">
					Start Free Trial
				</Link>
			</p>
			<X
				className="w-5 h-5 text-[#7E868C] cursor-pointer"
				onClick={handleClose}
			/>
		</div>
	);
}
