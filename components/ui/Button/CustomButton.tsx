import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
	text: string | StaticImageData;
	type?: "submit" | "reset" | "button";
	kind?: "primary" | "secondary";
	href?: string;
	alt?: string;
	loading?: boolean;
};

export default function CustomButton({ text, type = "submit", kind = "primary", href, alt = "button", loading = false }: Props) {
	const classes = `shadow-[0px_18px_30px_0px_rgba(47,28,28,0.1)] p-3 gap-2 flex justify-center items-center rounded-lg w-full text-sm h-full
	hover:shadow-[0px_18px_30px_0px_rgba(47,28,28,0.2)] hover:scale-105 transition-all duration-300 border ${
		kind === "primary" ? "bg-primary-default text-white" : "bg-white text-primary-default  border-primary-default"
	}
	${loading ? `cursor-not-allowed ${kind === "primary" && "!bg-primary-background-dark !text-primary-default border-2"}` : "cursor-pointer"}	
	`;
	const identifier = typeof text === "string" ? text : <Image src={text} alt={alt} width={20} height={20} />;
	return (
		<>
			<div>
				{href ? (
					<Link href={href || ""} className={classes}>
						{identifier}
					</Link>
				) : (
					<button className={classes} type={type} disabled={loading}>
						{loading ? "Loading..." : identifier}
					</button>
				)}
			</div>
		</>
	);
}
