import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
	interface User {
		token: string;
	}

	interface Session {
		accessToken: unknown;
		token: string;
	}

	interface JWT {
		accessToken: string;
	}
}

const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					label: "Email",
					type: "email",
					placeholder: "Enter you email",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				if (!credentials) {
					throw new Error("Credentials are required");
				}

				const { email, password } = credentials;

				const body = JSON.stringify({ email, password });

				const res = await fetch("https://exam.elevateegy.com/api/v1/auth/signin", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body,
				});

				const user = await res.json();

				if (res.ok && user) {
					return user;
				} else {
					throw new Error(user?.message || "Invalid email or password");
				}
			},
		}),
	],
	pages: {
		signIn: "/",
	},
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async jwt({ token, user }) {
			return { ...token, ...user };
		},
		async session({ session, token }) {
			return { ...session, ...token };
		},
	},
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
export const options = authOptions;
