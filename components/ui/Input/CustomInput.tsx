"use client";

import React from "react";
import { VscEye } from "react-icons/vsc";

type props = {
	type: string;
	placeholder: string;
	name: string;
	id: string;
	value: string;
};

export default function CustomInput({ type, placeholder, name, id, value }: props) {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<>
			<div className='relative'>
				<input
					className='bg-[#F9F9F9] rounded-lg w-full p-3 text-primary-text-light text-sm shadow-[0px_10px_20px_0px_rgba(68,97,242,0.05)] border focus-visible:border-primary-default focus-visible:border-2 outline-none'
					placeholder={placeholder}
					type={type === "password" ? (showPassword ? "text" : "password") : type}
					name={name}
					id={id}
					defaultValue={value}
					autoComplete={type === "password" ? "current-password" : "on"}
				/>
				{type === "password" && (
					<VscEye className='absolute top-1/2 right-3 transform -translate-y-1/2 text-primary-text-dark text-xl cursor-pointer' onClick={handleShowPassword} />
				)}
			</div>
		</>
	);
}
