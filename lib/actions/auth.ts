"use server";

import createRequest from "../create-request";
import { deleteCookie } from "cookies-next";
import { cookies } from "next/headers";

export interface LoginDto {
	username: string;
	password: string;
}

export interface LoginResponse {
	jwt: string;
}

export const login = async (payload: LoginDto) => {
	return await createRequest("/login", "POST", payload);
};

export const logout = () => {
	try {
		deleteCookie("jwt", { cookies });

		return Promise.resolve();
	} catch (error) {
		return Promise.reject(error);
	}
};
