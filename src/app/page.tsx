import { Cal_Sans } from "next/font/google";
import ReactIcon from "@/components/icons/ReactIcon";
import NextIcon from "@/components/icons/NextIcon";
import NodeIcon from "@/components/icons/NodeIcon";
import MongoIcon from "@/components/icons/MongoIcon";
import TailwindIcon from "@/components/icons/TailwindIcon";
import PostgresqlIcon from "@/components/icons/PostgresqlIcon";
import ExpoIcon from "@/components/icons/ExpoIcon";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { LuPhoneCall, LuGithub } from "react-icons/lu";

const calSans = Cal_Sans({
	weight: "400",
	subsets: ["latin"],
});

const projects = [
	{
		title: "Algorithm Visualizer",
		description: "A sorting visualizer built with C++ and SDL2.",
		thumbnail: "/thumbnails/algorithm-visualizer.png",
		tags: ["C++", "SDL2"],
		// liveUrl: "#",
		githubUrl: "https://github.com/kavyadeepdev/algorithm-visualizer",
	},
	{
		title: "Cosmic Tropers",
		description:
			"A Space Invaders clone built using Java and JavaFX as a school project.",
		thumbnail: "/thumbnails/cosmic-troopers.png",
		tags: ["Java", "JavaFX"],
		// liveUrl: "#",
		githubUrl: "https://github.com/kavyadeepdev/cosmic-troopers",
	},
];

export default function HomePage() {
	return (
		<section className="h-full w-[44rem] pt-[8rem]">
			{/* <h3>Home Page</h3> */}
			<div id="hero" className="flex flex-col gap-8 w-full mb-24">
				<Image
					src={"/hero-pic.jpg"}
					alt="hero image"
					width={200}
					height={200}
					className="rounded-xl"
				/>
				<h2 className={`${calSans.className} text-gray-700 text-4xl`}>
					{/* <div className="mb-4">👋</div> */}
					{`Hi there! I'm Kavyadeep 👋`}
				</h2>
				<div className="flex flex-col gap-3">
					<p>
						{`I'm a`}{" "}
						{/* <span className="px-1 border-2 border-blue-400 rounded text-gray-600"> */}
						{/* <span className="px-2 py-1 bg-gray-100 rounded-xs"> */}
						<span className="px-1 py-0.5 bg-gray-100 rounded-md border border-gray-200">
							full-stack developer
						</span>{" "}
						crafting clean and performant web and mobile apps.
					</p>
					<p>
						I love building intuitive experiences that turn ideas into
						real-world projects.
					</p>
					<p>
						Excited to learn and grow through new challenges — Currently{" "}
						{/* <span className="px-1 border-2 border-blue-400 rounded text-gray-600"> */}
						{/* <span className="px-2 py-1 bg-gray-100 rounded-xs"> */}
						<span className="px-1 py-0.5 bg-gray-100 rounded-md border border-gray-200">
							open to internships.
						</span>
					</p>
				</div>
				<div className="mt-4 flex flex-wrap gap-4 items-center">
					<div className="w-8 hover:text-cyan-500">
						<ReactIcon />
					</div>
					<div className="w-8 hover:text-gray-700">
						<NextIcon />
					</div>
					<div className="w-8 hover:text-gray-700">
						<ExpoIcon />
					</div>
					<div className="w-8 hover:text-cyan-500">
						<TailwindIcon />
					</div>
					<div className="w-8 hover:text-green-500">
						<NodeIcon />
					</div>
					<div className="w-8 hover:text-green-500">
						<MongoIcon />
					</div>
					<div className="w-8 hover:text-blue-500">
						<PostgresqlIcon />
					</div>
				</div>
				<div className="mt-4 flex gap-4">
					<a
						href="https://github.com/kavyadeepdev"
						target="_blank"
						className="inline-flex items-center gap-2 bg-blue-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-600 transition"
					>
						<LuGithub />
						View My Repos
					</a>
					<Link
						href="/contact"
						className="inline-flex items-center gap-2 border-2 border-blue-500 text-blue-500 text-sm px-4 py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition"
					>
						<LuPhoneCall size={16} />
						{`Let's Connect`}
					</Link>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="w-full flex justify-between items-center">
					<h3 className={`${calSans.className} text-gray-700 text-xl`}>
						{/* What I'm currently working on */}
						Featured projects
					</h3>
					<Link
						href="/projects"
						className="text-sm text-blue-500 underline decoration-dashed hover:text-blue-600"
					>
						View All ↗
					</Link>
				</div>
				<div className="flex flex-col">
					{projects.map((project) => (
						<ProjectCard key={project.title} {...project} />
					))}
				</div>
			</div>
		</section>
	);
}
