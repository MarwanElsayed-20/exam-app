import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

type Props = {
	children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
	return (
		<>
			<div className='bg-primary-background-light h-screen'>
				<div className='container py-10 flex gap-[4.5rem]'>
					<Sidebar />
					<div className='flex flex-col gap-10 flex-1'>
						<Navbar />
						<div>{children}</div>
					</div>
				</div>
			</div>
		</>
	);
}
