"use client";

import Link from "next/link";
import {
	LuHouse,
	LuMessageSquareText,
	LuBriefcase,
	LuBook,
	LuMail,
} from "react-icons/lu";
import { usePathname } from "next/navigation";

const pages = [
	{
		title: "Home",
		url: "/",
		icon: LuHouse,
	},
	{
		title: "About",
		url: "/about",
		icon: LuMessageSquareText,
	},
	{
		title: "Projects",
		url: "/projects",
		icon: LuBriefcase,
	},
	{
		title: "Blog",
		url: "/blog",
		icon: LuBook,
	},
	{
		title: "Contact",
		url: "/contact",
		icon: LuMail,
	},
];

export default function Navbar() {
	const pathname = usePathname();
	return (
		<nav className="mb-12 text-sm">
			<h2 className="text-xs uppercase font-semibold tracking-wide text-gray-500 pl-2 mb-2">
				Navigation
			</h2>

			{pages.map((page) => {
				const isActive = pathname === page.url;
				return (
					<Link
						href={page.url}
						className={`flex items-center gap-1 p-2 rounded-lg ${
							isActive
								? "shadow-xs shadow-gray-300 bg-white text-blue-500"
								: "hover:text-neutral-600"
						}`}
					>
						<page.icon size={16} />
						{page.title}
					</Link>
				);
			})}
		</nav>
	);
}
