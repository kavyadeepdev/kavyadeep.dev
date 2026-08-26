export interface Project {
	title: string;
	description: string;
	thumbnail?: string;
	tags: string[];
	liveUrl?: string;
	githubUrl?: string;
	featured?: boolean;
}

export const projects: Project[] = [
	{
		title: "College Event Platform",
		description:
			"Architected the PostgreSQL database schema and backend for a campus event platform, implementing REST API routes for clubs, events, users, registrations, and attendance with authentication and registration constraints.",
		tags: ["Next.js", "TypeScript", "PostgreSQL", "Better Auth", "Tailwind CSS"],
		liveUrl: "https://eventlify-protocol.vercel.app",
		githubUrl: "https://github.com/kavyadeepdev/eventlify",
		featured: true,
	},
	{
		title: "Eco Refund",
		description:
			"Built a Digital Twin simulator for a Reverse Vending Machine-based recycling system, modeling waste classification, contamination detection, UPI payouts, machine telemetry, MQTT events, and operator controls, alongside an interactive landing page.",
		tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express", "OpenAI"],
		liveUrl: "https://ecorefund.netlify.app",
		githubUrl: "https://github.com/kavyadeepdev/ecorefund",
		featured: true,
	},
	{
		title: "COMMIT-ed",
		description:
			"Contributed to an open-source event leaderboard by building the projects page and implementing GitHub username verification for contributor submissions and badge generation.",
		tags: ["Node.js", "JavaScript", "SQLite", "GitHub API"],
		githubUrl: "https://github.com/kavyadeepdev/Protocol_LeaderBoard",
	},
	{
		title: "Simple Text Transfer Protocol",
		description:
			"Designed and implemented a custom application-layer protocol in C for message transfer between a server and client, including framing, message parsing, and Caesar cipher-based encryption.",
		tags: ["C", "POSIX Sockets"],
		githubUrl: "https://github.com/kavyadeepdev/sttp",
	},
	{
		title: "BLE Mesh Chat",
		description:
			"A peer-to-peer chat app over Bluetooth Low Energy using expo-bitchat as the native BLE mesh layer, with end-to-end encrypted messaging across a decentralized mesh network.",
		tags: ["Expo", "TypeScript", "React Native", "BLE"],
		githubUrl: "https://github.com/kavyadeepdev/ble-mesh-chat",
		featured: true,
	},
	{
		title: "Personal Portfolio Website",
		description:
			"Responsive developer portfolio built with Next.js and TypeScript, deployed automatically via Vercel on every push.",
		tags: ["Next.js", "TypeScript", "Vercel"],
		liveUrl: "https://kavyadeep.dev",
		githubUrl: "https://github.com/kavyadeepdev/kavyadeep.dev",
	},
	{
		title: "ReliefLink",
		description:
			"Offline-first disaster communication system where distressed devices relay SOS signals over BLE to a local gateway; the gateway persists alerts to a database and surfaces them on an internet-connected admin dashboard built with React and Express.",
		tags: ["TypeScript", "React", "Tailwind CSS", "Express", "Node.js", "BLE"],
		githubUrl: "https://github.com/kavyadeepdev/relief-link",
	},
	{
		title: "Algorithm Visualizer",
		description:
			"Visualized Bubble, Merge, and Quick Sort in real-time with step-by-step bar animations and a CMake-based modular architecture.",
		thumbnail: "/thumbnails/algorithm-visualizer.png",
		tags: ["C++", "SDL2", "CMake"],
		githubUrl: "https://github.com/kavyadeepdev/algorithm-visualizer",
		featured: true,
	},
	{
		title: "Cosmic Troopers",
		description:
			"Built a 2D arcade game with a game loop, frame-rate-independent physics, sprite rendering, and AABB collision detection; shipped a playable v0.5.0 release.",
		thumbnail: "/thumbnails/cosmic-troopers.png",
		tags: ["Java", "JavaFX"],
		githubUrl: "https://github.com/kavyadeepdev/cosmic-troopers",
	},
];
