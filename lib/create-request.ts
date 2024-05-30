import axios from "axios";
import { cookies } from "next/headers";
import { toast } from "sonner";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL!;

const cookie = cookies();

axios.interceptors.request.use((config) => {
	config.headers["Authorization"] = `Bearer ${cookie.get("jwt")}`;
	return Promise.resolve(config);
});

axios.interceptors.response.use((response) => {
	if (response.data?.jwt) {
		cookie.set("jwt", response.data.jwt);
	}

	return response;
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
			},
		});

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
