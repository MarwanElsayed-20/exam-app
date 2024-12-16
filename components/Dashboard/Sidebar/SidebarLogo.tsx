import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";

export default function SidebarLogo() {
	return (
		<>
			<div>
				<Image src={logo} alt='logo' width={150} height={150} />
			</div>
		</>
	);
}
