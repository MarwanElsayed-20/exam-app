import SidebarLinksT from "@/types/Dashboard/sidebarTypes";
import { MdOutlineHistory } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";

const sidebarLinks: SidebarLinksT[] = [
	{
		name: "Dashboard",
		link: "/dashboard",
		icon: <MdSpaceDashboard />,
	},
	{
		name: "Quiz History",
		link: "/quiz-history",
		icon: <MdOutlineHistory />,
	},
];

export default sidebarLinks;
