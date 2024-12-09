import React from "react";

import googleIcon from "@/public/google-logo.png";
import twitterIcon from "@/public/twitter-logo.png";
import facebookIcon from "@/public/facebook-logo.png";
import appleIcon from "@/public/apple-logo.png";
import CustomButton from "../ui/Button/CustomButton";

export default function IdentityProviders() {
	const providers = [
		{
			name: "Google",
			icon: googleIcon,
		},
		{
			name: "Twitter",
			icon: twitterIcon,
		},
		{
			name: "Facebook",
			icon: facebookIcon,
		},
		{
			name: "Apple",
			icon: appleIcon,
		},
	];
	return (
		<>
			<div className='flex gap-8 justify-center'>
				{providers.map((provider, index) => (
					<CustomButton key={index} text={provider.icon} alt={provider.name} kind='secondary' />
				))}
			</div>
		</>
	);
}
