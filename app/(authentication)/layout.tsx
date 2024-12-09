import AuthenticationLayout from "@/components/Authentication/AuthenticationLayout";
import React from "react";

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<main className='h-screen'>
				<AuthenticationLayout>{children}</AuthenticationLayout>
			</main>
		</>
	);
}
