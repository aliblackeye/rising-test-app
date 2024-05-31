"use server";

import createRequest from "../create-request";

interface DashboardInfo {
	expireTime: string;
	lastChargeAmount: string;
	lastCharge: string;
	totalDataUsage: string;
	dailyUsage: string;
}

export const dashboardInfo = async () => {
	const data = await createRequest("/get-info", "GET");
	return data as DashboardInfo;
};

interface TransactionsHistory {
	data: {
		type: string;
		location: string;
		rental: string;
		ipcount: string;
		purpose: string;
		date: string;
	}[];
}
export const transactionsHistory = async () => {
	return await createRequest<TransactionsHistory>("/get-table", "GET");
};
