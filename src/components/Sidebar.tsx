import Image from "next/image";
import { Cal_Sans } from "next/font/google";
import {
	LuGraduationCap,
	LuMapPin,
	LuMail,
	LuGithub,
	LuLinkedin,
	LuTwitter,
	LuDownload,
} from "react-icons/lu";
import Navbar from "./Navbar";

const calSans = Cal_Sans({
	weight: "400",
	subsets: ["latin"],
});

export default function Sidebar() {
	return (
		<aside className="fixed top-0 left-0 h-screen w-[16rem] bg-neutral-100 pt-18 pl-6">
			{/* Title */}
			<div className="flex items-center gap-2 mb-12">
				<div className="h-10 w-10 relative">
					<Image
						src="/profile.jpg"
						fill
						alt="profile picture"
						className="rounded-full"
					/>
				</div>
				<div>
					<h1 className={`text-neutral-900 ${calSans.className}`}>
						Kavyadeep Dev
					</h1>
					<h3 className="font-light text-sm">Full-Stack Developer</h3>
				</div>
			</div>
			{/* Location */}
			<div className="flex flex-col gap-2 text-sm mb-12 pl-2">
				<h2 className="text-xs uppercase font-semibold tracking-wide text-gray-500">
					Bio-data
				</h2>
				<div className="flex gap-1 items-center">
					<LuGraduationCap size={16} />
					<p>B.M.S. College of Engineering</p>
				</div>
				<div className="flex gap-1 items-center">
					<LuMapPin size={16} />
					<p>Bengaluru, KA</p>
				</div>
				<div className="flex gap-1 items-center hover:text-gray-600">
					<LuMail size={16} />
					<p className="underline decoration-dashed">
						<a href="mailto:kavyadeepdev@proton.me">kavyadeepdev@proton.me</a>
					</p>
				</div>
			</div>
			{/* Navbar */}
			<Navbar />
			{/* Links */}
			<div className="flex flex-col gap-2 text-sm mb-12 pl-2">
				<h2 className="text-xs uppercase font-semibold tracking-wide text-gray-500">
					Links
				</h2>
				<a
					href="https://github.com/kavyadeepdev"
					target="_blank"
					className="flex items-center gap-1 hover:text-gray-600"
				>
					<LuGithub size={16} />
					GitHub ↗
				</a>
				<a
					href="https://linkedin.com/in/kavyadeepdev/"
					target="_blank"
					className="flex items-center gap-1 hover:text-gray-600"
				>
					<LuLinkedin size={16} />
					LinkedIn ↗
				</a>
				<a
					href="https://x.com/kavyadeepdev"
					target="_blank"
					className="flex items-center gap-1 hover:text-gray-600"
				>
					<LuTwitter size={16} />
					Twitter ↗
				</a>
			</div>
			{/* Resume Download */}
			<div className="">
				<a
					href="/KavyadeepDev_Resume.pdf"
					download
					className="inline-flex items-center gap-2 bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition"
				>
					<LuDownload size={16} />
					Download CV
				</a>
			</div>
		</aside>
	);
}
