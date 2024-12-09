import Image from "next/image";
import React from "react";
import authenticationImg from "@/public/bro.png";
import CustomButton from "../ui/Button/CustomButton";

type Props = {
	children: React.ReactNode;
};

export default function AuthenticationLayout({ children }: Props) {
	return (
		<>
			<div className='flex h-full'>
				<div className='p-14 h-full bg-[#F0F4FC] rounded-tr-[100px] rounded-br-[100px] shadow-[0px_5px_100px_0px_rgba(0,0,0,0.1)] flex flex-col gap-16 flex-1'>
					<div className='flex flex-col gap-2 w-3/4'>
						<h1 className='text-5xl font-bold leading-10'>
							Welcome to <span className='text-6xl text-primary-dark'>Elevate</span>
						</h1>
						<p className='text-[16px]'>Quidem autem voluptatibus qui quaerat aspernatur architecto natus</p>
					</div>
					<div className='h-full'>
						<Image src={authenticationImg} alt='logo' width={318} height={335} />
					</div>
				</div>
				<div className='p-14 flex flex-col flex-1 items-end gap-8'>
					<CustomButton href='/register' text='Register' kind='secondary' />
					<div className=' flex justify-center w-full'>{children}</div>
				</div>
			</div>
		</>
	);
}
