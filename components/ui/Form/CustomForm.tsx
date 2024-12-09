"use client";

import React from "react";
import CustomInput from "../Input/CustomInput";
import Form from "next/form";
import Link from "next/link";
import CustomButton from "../Button/CustomButton";
import CustomDivider from "../Divider/CustomDivider";
import IdentityProviders from "@/components/Authentication/IdentityProviders";

export type FormDetails = {
	title: string;
	inputs: {
		type: string;
		placeholder: string;
		name: string;
		id: string;
		value: string;
	}[];
	link: {
		href: string;
		text: string;
		description?: string;
		align: string;
	};
	submitText: string;
};

type Props = {
	formDetails: FormDetails;
};

export default function CustomForm({ formDetails }: Props) {
	const { title, inputs, link, submitText } = formDetails;

	const handleSubmit = async (formData: FormData) => {
		console.log("Form submitted:", Object.fromEntries(formData));
	};
	return (
		<>
			<div className='w-4/5 flex flex-col gap-8'>
				<h4 className='font-bold text-2xl'>{title}</h4>
				<Form action={handleSubmit}>
					<div className='flex flex-col gap-10'>
						<div className='flex flex-col gap-4'>
							<div className='flex flex-col gap-8'>
								{inputs.map((input) => (
									<CustomInput key={input.id} type={input.type} placeholder={input.placeholder} name={input.name} id={input.id} value={input.value} />
								))}
							</div>
							<p className={`text-[14px] ${link.align}`}>
								{link.description && link.description}
								<span>
									<Link href={link.href} className='text-primary-default'>
										{link.text}
									</Link>
								</span>
							</p>
						</div>
						<CustomButton text={submitText} />
					</div>
				</Form>
				<div className='flex flex-col gap-8'>
					<CustomDivider text='Or Continue With' />
					<IdentityProviders />
				</div>
			</div>
		</>
	);
}
