import Image from "next/image";
import React from "react";

type Props = {
	subject: {
		name: string;
		icon: string;
	};
};

export default function QuizCard({ subject }: Props) {
	return (
		<>
			<div className='relative group overflow-hidden cursor-pointer rounded-xl'>
				<Image src={subject.icon} alt={subject.name} width={300} height={300} className='w-full h-full object-contain group-hover:scale-110 transition-all duration-300' />
				<div className='flex flex-col justify-center p-4 absolute top-[199.78px] left-[27.01px] gap-0 rounded-xl bg-[#1935CA66] backdrop-blur-[27.01px]'>
					<h3 className='text-white font-bold text-sm'>{subject.name}</h3>
					<p className='text-white text-sm'>Voluptatem aut ut dignissimos blanditiis</p>
				</div>
			</div>
		</>
	);
}
