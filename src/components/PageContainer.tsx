import React from "react";

export default function PageContainer({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		// <main className="min-h-full w-full flex justify-center bg-white rounded-l-2xl border-[1px] border-gray-200 overflow-auto">
		<main className="min-h-full w-full flex justify-center bg-white overflow-auto">
			{children}
		</main>
	);
}
