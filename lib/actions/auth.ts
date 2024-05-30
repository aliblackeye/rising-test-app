"use server";

import createRequest from "../create-request";

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
