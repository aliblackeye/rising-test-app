import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";
export const config = {
	matcher: [
		"/((?!api|_next/static|images|not-found|_next/image|favicon.ico).*)",
	],
};

export function middleware(req: NextRequest) {
	const res = NextResponse.next();
	const cookieStore = cookies();

	const token = cookieStore.get("jwt");

	const isLoginPage = req.nextUrl.pathname.startsWith("/login");

	if (token?.value) {
		if (isLoginPage) {
			return NextResponse.redirect(new URL("/home", req.url));
		}
	}

	// Token yoksa
	else {
		if (!isLoginPage) {
			return NextResponse.redirect(new URL("/login", req.url));
		}
	}

	return res;
}
