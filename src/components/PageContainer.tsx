import React from "react";

export default function PageContainer({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<main className="min-h-full flex-1 w-full flex justify-center bg-white overflow-y-auto px-4 sm:px-6 md:px-0">
			{children}
		</main>
	);
}
