import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import SidebarButton from "./SidebarButton";

export default function SignoutButton() {
	const router = useRouter();

	const handleSignout = async () => {
		await signOut();
		router.push("/");
	};
	return (
		<>
			<div>
				<SidebarButton onClick={handleSignout} />
			</div>
		</>
	);
}
