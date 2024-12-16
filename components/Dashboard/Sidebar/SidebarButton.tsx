import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RiLogoutBoxFill } from "react-icons/ri";

type Props = {
	link?: {
		name: string;
		link: string;
		icon: React.ReactNode;
	};
	onClick?: () => void;
};

export default function SidebarButton({ link, onClick }: Props) {
	const pathname = usePathname();

	const className = "flex gap-8 items-center p-2 text-primary-default text-xl font-semibold rounded-[10px]";
	const spanClassName = "text-primary-text-dark";

	return (
		<>
			{link ? (
				<Link href={link.link} className={`${className} ${pathname === link.link ? "bg-primary-default text-white" : ""}`}>
					{link.icon}
					<span className={`${spanClassName} ${pathname === link.link ? "text-white" : ""}`}>{link.name}</span>
				</Link>
			) : (
				<button className={className} onClick={onClick}>
					<RiLogoutBoxFill />
					<span className={spanClassName}>Logout</span>
				</button>
			)}
		</>
	);
}
