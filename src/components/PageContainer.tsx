import React from "react";

export default function PageContainer({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<main className="h-screen flex-1 my-2 p-2 ml-[17.7rem] space-x-2 bg-white rounded-2xl border-[1px] border-gray-200">
			{children}
		</main>
	);
}
