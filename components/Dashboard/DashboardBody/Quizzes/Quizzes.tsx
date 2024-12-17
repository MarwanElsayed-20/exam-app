"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";
import QuizCard from "./QuizCard";

type props = {
	quizzes: {
		message: string;
		error?: string;
		subjects: {
			_id: string;
			name: string;
			icon: string;
			createdAt: string;
		}[];
	};
};

export default function Quizzes({ quizzes }: props) {
	useEffect(() => {
		if (quizzes && quizzes.message === "success") {
			toast("Quizzes fetched successfully", { type: "success" });
		} else {
			toast(quizzes?.error || "Quizzes fetched failed", { type: "error" });
		}
	}, [quizzes]);
	return (
		<>
			<div className='flex flex-col gap-6 py-8 px-4 rounded-[20px] bg-white shadow-[0px_15px_40px_0px_#0000000D]'>
				<div>
					<h2 className='font-medium text-2xl text-primary-default'>Quizzes</h2>
				</div>
				<div className='grid grid-cols-3 gap-5'>
					{quizzes?.subjects?.map((subject, index) => (
						<div key={index} className='rounded-lg'>
							<QuizCard subject={subject} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
