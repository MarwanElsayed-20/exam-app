"use client";

import CustomButton from "@/components/ui/Button/CustomButton";
import Image from "next/image";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import ExamQuestionsModal from "./ExamQuestionsModal";

export type QuizExamsT = {
	message: string;
	error?: string;
	exams: {
		_id: string;
		title: string;
		numberOfQuestions: number;
		duration: number;
	}[];
};
type Props = {
	quizExams: QuizExamsT;
};

export default function ExamsBody({ quizExams }: Props) {
	const [openModal, setOpenModal] = React.useState(false);
	const [examId, setExamId] = React.useState("");

	const handleStartExam = (examId: string) => {
		setOpenModal(true);
		setExamId(examId);
	};

	useEffect(() => {
		if (quizExams && quizExams.message === "success") {
			toast("quizExams fetched successfully", { type: "success" });
		} else {
			toast(quizExams?.error || "quizExams fetched failed", { type: "error" });
		}
	}, [quizExams]);
	return (
		<>
			<div className='flex flex-col gap-6 justify-center'>
				{quizExams?.exams?.map((exam, index: number) => (
					<div key={index} className='flex justify-center gap-6 rounded-[10px] py-4 px-6 bg-primary-background-light shadow-[0px_15px_40px_0px_rgba(42,41,41,0.05)] '>
						<div>
							<Image src={"https://placehold.jp/3d4070/ffffff/70x70.png"} alt='exam' width={70} height={70} />
						</div>
						<div className='flex justify-between w-full'>
							<div className='flex flex-col justify-center gap-1'>
								<h4 className='text-[16px] text-primary-text-default font-medium'>{exam.title}</h4>
								<p className='text-[13px] font-normal text-primary-text-dark'>{exam.numberOfQuestions} Question</p>
							</div>
							<div className='flex flex-col gap-2 justify-center'>
								<p className='text-[13px] font-normal text-primary-text-default'>{exam.numberOfQuestions} Question</p>
								<CustomButton text={"Start"} type='button' className='!px-6 !py-1' onClick={() => handleStartExam(exam._id)} />
							</div>
						</div>
					</div>
				))}
			</div>

			<ExamQuestionsModal quizExams={quizExams} openModal={openModal} examId={examId} setOpenModal={setOpenModal} />
		</>
	);
}
