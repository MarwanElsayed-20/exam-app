import type { Config } from "tailwindcss";

export default {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					sm: "2rem",
					lg: "4rem",
					xl: "5rem",
				},
			},
			colors: {
				primary: {
					default: "#4461F2",
					dark: "#122D9C",
					background: {
						light: "#F9F9F9",
						default: "#ffff",
						dark: "#F0F4FC",
					},
					text: {
						light: "#A1A4A9",
						default: "#000000",
						dark: "#6C737F",
					},
					other: {
						warning: "#CC1010",
						select: "#3364FD",
						success: "#11CE19",
					},
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
