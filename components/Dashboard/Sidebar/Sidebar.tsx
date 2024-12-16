"use client";

import SidebarLinks from "./SidebarLinks";
import SidebarLogo from "./SidebarLogo";
import SignoutButton from "./SignoutButton";

export default function Sidebar() {
	return (
		<>
			<div className='flex flex-col gap-14'>
				<SidebarLogo />
				<SidebarLinks />
				<SignoutButton />
			</div>
		</>
	);
}
