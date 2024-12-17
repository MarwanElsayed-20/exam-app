"use server";

import { options } from "@/app/api/auth/[...nextauth]/route";
import { baseUrl } from "@/constants/constants";
import { getServerSession } from "next-auth";

type GetDataT = {
	endpoint: string;
	params?: string;
	query?: string;
};

const getData = async ({ endpoint, params, query }: GetDataT) => {
	const session = await getServerSession(options);

	const token = session?.token;

	const res = await fetch(`${baseUrl}${endpoint}${params ? `/${params}` : ""}${query ? `?${query}` : ""}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			token: token ? `${token}` : "",
		},
	});
	const data = await res.json();

	if (res.ok && data) {
		return data;
	} else {
		throw new Error(data?.message || "Something went wrong while fetching data");
	}
};

export default getData;
