import React from "react";
import Quizzes from "./Quizzes/Quizzes";
import getData from "@/lib/actions/getData";
import endpoints from "@/constants/endpoints";
import { notFound } from "next/navigation";

export default async function DashboardBody() {
	const quizzes = await getData({
		endpoint: endpoints.subjects,
		query: "limit=3",
	});

	if (!quizzes) return notFound();
	return (
		<>
			<div>
				<Quizzes {...{ quizzes }} />
			</div>
		</>
	);
}