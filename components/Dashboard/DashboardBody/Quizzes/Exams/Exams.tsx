import endpoints from "@/constants/endpoints";
import getData from "@/lib/actions/getData";
import ExamsBody from "./ExamsBody";
import NotFound from "@/app/not-found";
import NoData from "@/components/ui/NoData/NoData";

export default async function Exams({ id }: { id: string }) {
	const [quiz, quizExams] = await Promise.all([
		getData({
			endpoint: endpoints.subjects,
			params: id,
		}),

		getData({
			endpoint: endpoints.exams,
			query: `subject=${id}`,
		}),
	]);

	const quizName = quiz?.category?.name || "Quiz";
	console.log(quizExams);
	if (!quizExams) return NotFound();
	if (!quizExams?.exams?.length) return NoData();

	return (
		<>
			<div className='flex flex-col gap-6'>
				<h3 className='text-lg text-primary-text-default font-medium'>{`${quizName} Exams`} </h3>
				<ExamsBody quizExams={quizExams} />
			</div>
		</>
	);
}
