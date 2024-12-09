import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
	text: string | StaticImageData;
	type?: "submit" | "reset" | "button";
	kind?: "primary" | "secondary";
	href?: string;
	alt?: string;
};

export default function CustomButton({ text, type = "submit", kind = "primary", href, alt = "button" }: Props) {
	const classes = `shadow-[0px_18px_30px_0px_rgba(47,28,28,0.1)] p-3 gap-2 flex justify-center items-center rounded-lg w-full text-sm h-full ${
		kind === "primary" ? "bg-primary-default text-white" : "bg-white text-primary-default border border-primary-default"
	}`;
	const identifier = typeof text === "string" ? text : <Image src={text} alt={alt} width={20} height={20} />;
	return (
		<>
			<div>
				{href ? (
					<Link href={href || ""} className={classes}>
						{identifier}
					</Link>
				) : (
					<button className={classes} type={type}>
						{identifier}
					</button>
				)}
			</div>
		</>
	);
}
