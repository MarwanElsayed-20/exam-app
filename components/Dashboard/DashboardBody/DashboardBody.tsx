import React from "react";
import Quizzes from "./Quizzes/Quizzes";
import getData from "@/lib/actions/getData";
import endpoints from "@/constants/endpoints";
import NotFound from "@/app/not-found";
import NoData from "@/components/ui/NoData/NoData";

export default async function DashboardBody() {
	const quizzes = await getData({
		endpoint: endpoints.subjects,
		query: "limit=3",
	});

	if (!quizzes) return NotFound();
	if (!quizzes?.subjects?.length) return NoData();
	return (
		<>
			<div>
				<Quizzes {...{ quizzes }} />
			</div>
		</>
	);
}
