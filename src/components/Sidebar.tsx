"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Cal_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import {
	LuGraduationCap,
	LuMapPin,
	LuMail,
	LuGithub,
	LuLinkedin,
	LuTwitter,
	LuDownload,
	LuMenu,
	LuX,
} from "react-icons/lu";
import Navbar from "./Navbar";

const calSans = Cal_Sans({
	weight: "400",
	subsets: ["latin"],
});

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	// Close sidebar on route change
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	// Close sidebar on Escape key press
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setIsOpen(false);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<>
			{/* Mobile Top Navigation Header */}
			<header className="md:hidden flex items-center px-4 py-3 bg-neutral-100 border-b border-gray-200 sticky top-0 z-30 flex-shrink-0 w-full">
				<div className="flex items-center gap-3">
					<button
						type="button"
						onClick={() => setIsOpen((prev) => !prev)}
						aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
						className="p-1.5 -ml-1 rounded-lg text-neutral-700 hover:bg-neutral-200/60 active:bg-neutral-300/60 transition-colors focus:outline-none cursor-pointer"
					>
						{isOpen ? <LuX size={22} /> : <LuMenu size={22} />}
					</button>
					<div className="flex items-center gap-2.5">
						<div className="h-8 w-8 relative flex-shrink-0">
							<Image
								src="/profile.jpg"
								fill
								alt="profile picture"
								className="rounded-full object-cover"
							/>
						</div>
						<div>
							<h1 className={`text-neutral-900 text-sm font-medium leading-tight ${calSans.className}`}>
								Kavyadeep Dev
							</h1>
							<h3 className="font-light text-xs text-neutral-500 leading-tight">
								Full-Stack Developer
							</h3>
						</div>
					</div>
				</div>
			</header>

			{/* Mobile Backdrop Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/40 z-40 backdrop-blur-xs md:hidden transition-opacity duration-300"
					onClick={() => setIsOpen(false)}
					aria-hidden="true"
				/>
			)}

			{/* Sidebar Drawer / Desktop Aside */}
			<aside
				className={`fixed top-0 left-0 h-screen w-[17rem] bg-neutral-100 pt-8 px-4 border-r border-gray-200 z-50 overflow-y-auto transition-transform duration-300 ease-in-out md:translate-x-0 ${
					isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
				}`}
			>
				{/* Title / Profile Info */}
				<div className="flex items-center justify-between mb-12">
					<div className="flex items-center gap-2">
						<div className="h-10 w-10 relative flex-shrink-0">
							<Image
								src="/profile.jpg"
								fill
								alt="profile picture"
								className="rounded-full object-cover"
							/>
						</div>
						<div>
							<h1 className={`text-neutral-900 ${calSans.className}`}>
								Kavyadeep Dev
							</h1>
							<h3 className="font-light text-sm">Full-Stack Developer</h3>
						</div>
					</div>
					{/* Close button inside sidebar on mobile */}
					<button
						type="button"
						onClick={() => setIsOpen(false)}
						aria-label="Close navigation menu"
						className="md:hidden p-1.5 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60 transition cursor-pointer"
					>
						<LuX size={20} />
					</button>
				</div>

				{/* Location / Bio-data */}
				<div className="flex flex-col gap-2 text-sm mb-12 pl-2">
					<h2 className="text-xs uppercase font-semibold tracking-wide text-neutral-500/80">
						Bio-data
					</h2>
					<div className="flex gap-2 items-center text-neutral-600">
						<LuGraduationCap size={16} />
						<p>B.M.S. College of Engineering</p>
					</div>
					<div className="flex gap-2 items-center text-neutral-600">
						<LuMapPin size={16} />
						<p>Bengaluru, KA</p>
					</div>
					<div className="flex gap-2 items-center text-neutral-600">
						<LuMail size={16} />
						<p className="underline decoration-dashed">
							<a href="mailto:kavyadeepdev@proton.me">kavyadeepdev@proton.me</a>
						</p>
					</div>
				</div>

				{/* Navbar */}
				<Navbar onNavigate={() => setIsOpen(false)} />

				{/* Links */}
				<div className="flex flex-col gap-2 text-sm mb-12 pl-2">
					<h2 className="text-xs uppercase font-semibold tracking-wide text-neutral-500/80">
						Links
					</h2>
					<a
						href="https://github.com/kavyadeepdev"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:text-gray-600"
					>
						<LuGithub size={16} />
						GitHub ↗
					</a>
					<a
						href="https://linkedin.com/in/kavyadeepdev/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:text-gray-600"
					>
						<LuLinkedin size={16} />
						LinkedIn ↗
					</a>
					<a
						href="https://x.com/kavyadeepdev"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:text-gray-600"
					>
						<LuTwitter size={16} />
						Twitter ↗
					</a>
				</div>

				{/* Resume Download */}
				<div className="pb-8">
					<a
						href="/KavyadeepDev_Resume.pdf"
						download
						onClick={() => setIsOpen(false)}
						className="inline-flex items-center gap-2 bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition"
					>
						<LuDownload size={16} />
						Download CV
					</a>
				</div>
			</aside>
		</>
	);
}
