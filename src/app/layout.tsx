import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import PageContainer from "@/components/PageContainer";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Kavyadeep Dev",
	description: "Portfolio website of Kavyadeep Dev",
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} antialiased flex w-screen h-screen pl-[17rem] bg-neutral-100 text-gray-500`}
			>
				<Sidebar />
				<PageContainer>{children}</PageContainer>
			</body>
		</html>
	);
}
