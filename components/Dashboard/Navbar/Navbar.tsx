import CustomButton from "@/components/ui/Button/CustomButton";
import CustomInput from "@/components/ui/Input/CustomInput";
import React from "react";
import profilePic from "@/public/pp.png";
import Image from "next/image";

export default function Navbar() {
	return (
		<>
			<div className='flex gap-6 items-center'>
				<div className='flex gap-6 flex-1'>
					<div className='flex-1'>
						<CustomInput id='search' name='search' placeholder='Search' type='text' value='' />
					</div>
					<div className='w-48'>
						<CustomButton text={"Search"} />
					</div>
				</div>
				<div>
					<div>
						<Image src={profilePic} alt='profile' width={60} height={60} className='rounded-full shadow-[0px_15px_40px_5px_#EDEDED]' />
					</div>
				</div>
			</div>
		</>
	);
}
