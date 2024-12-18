import Modal from "@/components/ui/Modal/Modal";
import React, { useCallback, useEffect, useState } from "react";
import { FcAlarmClock } from "react-icons/fc";
import { QuizExamsT } from "./ExamsBody";
import formatTime from "@/lib/utils/formatTime";

type Props = {
	quizExams: QuizExamsT;
	openModal: boolean;
	setOpenModal: (value: boolean) => void;
	examId: string;
};

export default function ExamQuestionsModal({ quizExams, openModal, setOpenModal, examId }: Props) {
	const [timer, setTimer] = useState<number>(0);
	const [currentQuestion, setCurrentQuestion] = useState<number>(1);
	const [examDetails, setExamDetails] = useState<{
		_id: string;
		title: string;
		numberOfQuestions: number;
		duration: number;
	}>();
	const [answers, setAnswers] = useState<{ rightAnswer: string[]; wrongAnswer: string[] }>({
		rightAnswer: [],
		wrongAnswer: [],
	});

	// const handleExamDetails = useCallback(() => {
	// 	const exam = quizExams.exams.find((exam) => exam._id === examId);
	// 	if (exam) {
	// 		setExamDetails(exam);
	// 		setTimer(exam.duration * 60); // Duration in seconds
	// 	}
	// }, [examId, quizExams.exams]);

	const handleNextQuestion = () => {
		setCurrentQuestion((prev) => prev + 1);
	};

	// const handleQuestionTimer = () => {
	// 	const interval = setInterval(() => {
	// 		setTimer((prev) => Math.max(prev - 1, 0));
	// 	}, 1000);

	// 	return () => clearInterval(interval);
	// };

	useEffect(() => {
		if (openModal) {
			const exam = quizExams.exams.find((exam) => exam._id === examId);
			if (exam) {
				setExamDetails(exam);
				setTimer((exam?.duration || 0) * 60);
			}
		}
	}, [examId, openModal, quizExams.exams, examDetails?.duration]);

	useEffect(() => {
		if (timer <= 0) return;

		const interval = setInterval(() => {
			setTimer((prev) => Math.max(prev - 1, 0));
		}, 1000);

		return () => clearInterval(interval);
	}, [timer]);

	return (
		<>
			<Modal openModal={openModal} setOpenModal={setOpenModal}>
				<div className='flex flex-col gap-7'>
					<div className='flex justify-between items-center w-full'>
						<p className='text-primary-default text-sm font-medium'>{`Question ${currentQuestion} / ${examDetails?.numberOfQuestions}`}</p>
						<p className='flex gap-2 p-1 items-center'>
							<FcAlarmClock className='text-2xl' />
							<span className='text-primary-other-success text-lg'>{formatTime(timer)}</span>
						</p>
					</div>
					<div></div>
				</div>
				<div></div>
			</Modal>
		</>
	);
}
