import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
	const token = await getToken({ req, secret: process.env.AUTH_SECRET });

	console.log("token ===>", token);

	const { pathname } = req.nextUrl;

	if (token) {
		if (pathname === "/") {
			return NextResponse.redirect(new URL("/dashboard", req.url));
		}
	} else {
		const unauthenticatedPaths = ["/", "/register", "/forgot-password", "/reset-password"];

		if (!unauthenticatedPaths.includes(pathname)) {
			return NextResponse.redirect(new URL("/", req.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next|static|favicon.ico).*)"],
};
