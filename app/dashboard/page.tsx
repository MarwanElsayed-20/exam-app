import DashboardBody from "@/components/Dashboard/DashboardBody/DashboardBody";
import { Suspense } from "react";

export default async function page() {
	// const session = await getServerSession(options);
	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<DashboardBody />
			</Suspense>
		</>
	);
}
