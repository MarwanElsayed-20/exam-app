import Exams from "@/components/Dashboard/DashboardBody/Quizzes/Exams/Exams";
import { Suspense } from "react";

export default async function page(context: {
	params: {
		id: string;
	};
}) {
	const { id } = await context.params;

	return (
		<>
			<Suspense fallback={<div>Loading...</div>}>
				<Exams id={id} />
			</Suspense>
		</>
	);
}
