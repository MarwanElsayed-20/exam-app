import CustomForm, { FormDetails } from "@/components/ui/Form/CustomForm";

export default function Login() {
	const formDetails: FormDetails = {
		title: "Sign in",
		submitText: "Sign in",
		inputs: [
			{
				type: "email",
				placeholder: "Email",
				name: "email",
				id: "email",
				value: "",
			},
			{
				type: "password",
				placeholder: "Password",
				name: "password",
				id: "password",
				value: "",
			},
		],
		link: {
			align: "text-right",
			href: "/forgot-password",
			text: "Recover Password ?",
		},
	};

	return (
		<>
			<CustomForm {...{ formDetails }} />
		</>
	);
}
