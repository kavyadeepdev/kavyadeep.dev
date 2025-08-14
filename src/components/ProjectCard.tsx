import Image from "next/image";
import { Cal_Sans } from "next/font/google";

const calSans = Cal_Sans({
	weight: "400",
	subsets: ["latin"],
});

export default function ProjectCard({
	title,
	description,
	thumbnail,
	tags,
	liveUrl,
	githubUrl,
}: Readonly<{
	title: string;
	description: string;
	thumbnail: string;
	tags: string[];
	liveUrl?: string;
	githubUrl?: string;
}>) {
	return (
		<div className="rounded-xl w-full p-4 flex gap-4 border border-gray-200 hover:shadow hover:border-gray-300 transition-all hover:cursor-pointer mb-4">
			<Image
				src={thumbnail}
				width={250}
				height={150}
				className="rounded-xl shadow object-cover"
				alt={`${title} project image`}
			/>
			<div className="flex flex-col justify-between flex-1">
				<div>
					<h2
						className={`${calSans.className} text-gray-900 text-lg font-semibold`}
					>
						{title}
					</h2>
					<p className="text-gray-600 mt-1 text-sm leading-relaxed">
						{description}
					</p>
				</div>

				<div className="mt-4">
					{tags.map((tag) => (
						<span className="text-xs px-1.5 py-0.5 bg-gray-100 rounded-md border border-gray-200 text-gray-600 mr-2">
							{tag}
						</span>
					))}
				</div>

				<div className="flex gap-2 justify-end text-xs mt-3">
					{liveUrl && (
						<a
							href={liveUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="px-3 py-1 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors"
						>
							Live ↗
						</a>
					)}
					{githubUrl && (
						<a
							href={githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="px-3 py-1 rounded-lg border border-gray-700 text-gray-700 hover:bg-gray-100 transition-colors"
						>
							Source ↗
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
