import React from "react";

type Props = {
	text: string;
};

export default function CustomDivider({ text }: Props) {
	return (
		<>
			<div className='relative flex py-5 items-center'>
				<div className='flex-grow border-t border-primary-text-light'></div>
				<span className='flex-shrink mx-4 text-primary-text-light'>{text}</span>
				<div className='flex-grow border-t border-primary-text-light'></div>
			</div>
		</>
	);
}
