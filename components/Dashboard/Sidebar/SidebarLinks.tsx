import sidebarLinks from "@/constants/Dashboard/sidebarConstants";
import SidebarButton from "./SidebarButton";

export default function SidebarLinks() {
	return (
		<>
			<div>
				<ul className='flex flex-col gap-8'>
					{sidebarLinks.map((link, index) => (
						<li key={index}>
							<SidebarButton link={link} />
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
