"use server";

import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { cookies } from "next/headers";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL!;

axios.interceptors.request.use((config) => {
	return Promise.resolve(config);
});

axios.interceptors.response.use((response) => {
	return Promise.resolve(response);
});

export async function createRequest<Type>(
	url: string,
	method: "GET" | "POST" | "PUT" | "DELETE",
	data?: Type
) {
	try {
		const res = await axios.request({
			url,
			method,
			data,
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				["Authorization"]: `${getCookie("jwt", { cookies })}`,
			},
		});

		if (res.data?.jwt) {
			setCookie("jwt", res.data.jwt, { cookies });
		}
		return Promise.resolve(res.data);
	} catch (error: any) {
		console.log({
			url: `${error.request?.host}${error.request?.path}`,
			method: error.request?.method,
			data: error.response?.data,
		});
		return Promise.reject(error);
	}
}

export default createRequest;
