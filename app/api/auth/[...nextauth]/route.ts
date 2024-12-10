import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
	interface User {
		token: string;
	}

	interface Session {
		accessToken: unknown;
	}

	interface JWT {
		accessToken: string;
	}
}

export const options: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email", placeholder: "Enter you email" },
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

const handler = NextAuth(options);

export { handler as GET, handler as POST };
