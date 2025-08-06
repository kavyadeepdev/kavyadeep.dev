import React from "react";

export default function PageContainer({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<main className="h-full w-full flex-1 p-2 bg-white rounded-l-2xl border-[1px] border-gray-200">
			{children}
		</main>
	);
}
