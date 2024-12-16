import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import React from "react";

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<DashboardLayout>{children}</DashboardLayout>
		</>
	);
}
