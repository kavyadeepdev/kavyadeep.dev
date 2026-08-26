import { Cal_Sans } from "next/font/google";
import ProjectCard from "@/components/ProjectCard";

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

export default function ProjectPage() {
	return (
		<section className="min-h-full w-full max-w-[40rem] pt-8 md:pt-[8rem] pb-16">
			{/* <h3>Home Page</h3> */}
			<div className="flex flex-col gap-6 sm:gap-8 w-full mb-16 sm:mb-24">
				<h2 className={`${calSans.className} text-gray-700 text-3xl sm:text-4xl`}>
					{/* <div className="mb-4">👋</div> */}
					{`Projects 🚀`}
				</h2>
				{/* <input
					type="text"
					placeholder="Search"
					className="border-b-2 border-neutral-300 focus:outline-none"
				/> */}
				<div className="flex flex-col">
					{projects.map((project) => (
						<ProjectCard key={project.title} {...project} />
					))}
				</div>
			</div>
		</section>
	);
}
