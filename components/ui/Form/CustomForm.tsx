"use client";

import React, { FormEvent, useState } from "react";
import CustomInput from "../Input/CustomInput";
import Link from "next/link";
import CustomButton from "../Button/CustomButton";
import CustomDivider from "../Divider/CustomDivider";
import IdentityProviders from "@/components/Authentication/IdentityProviders";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

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
	const router = useRouter();

	const [loading, setLoading] = useState(false);

	const { title, inputs, link, submitText } = formDetails;

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);

		// for (const [key, value] of formData.entries()) {
		// 	console.log(`Key: ${key}, Value: ${value}`);
		// }

		const dataToSend = {
			email: formData.get("email") as string,
			password: formData.get("password") as string,
		};

		setLoading(true);

		const res = await signIn("credentials", {
			email: dataToSend.email,
			password: dataToSend.password,
			redirect: false,
		});

		setLoading(false);

		if (res && res.ok) {
			toast("Sign-in successful", { type: "success" });
			router.push("/dashboard");
		} else {
			toast(res?.error || "Sign-in failed", { type: "error" });
		}
	};
	return (
		<>
			<div className='w-4/5 flex flex-col gap-8'>
				<h4 className='font-bold text-2xl'>{title}</h4>
				<form onSubmit={handleSubmit}>
					<div className='flex flex-col gap-10'>
						<div className='flex flex-col gap-4'>
							<div className='flex flex-col gap-8'>
								{inputs.map((input) => (
									<CustomInput key={input.id} type={input.type} placeholder={input.placeholder} name={input.name} id={input.id} value={input.value} />
								))}
							</div>
							<p
								className={`text-[14px] 
									
								${link.align}`}
							>
								{link.description && link.description}
								<span className='hover:underline '>
									<Link href={link.href} className='text-primary-default'>
										{link.text}
									</Link>
								</span>
							</p>
						</div>
						<CustomButton text={submitText} loading={loading} />
					</div>
				</form>
				<div className='flex flex-col gap-8'>
					<CustomDivider text='Or Continue With' />
					<IdentityProviders />
				</div>
			</div>
		</>
	);
}
