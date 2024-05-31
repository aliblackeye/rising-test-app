import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	title: "Dashboard | Rising",
};

export default async function Dashboard() {
	redirect("/dashboard");
}
