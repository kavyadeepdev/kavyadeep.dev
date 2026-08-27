export interface Project {
	slug: string;
	title: string;
	description: string;
	longDescription?: string;
	highlights?: string[];
	thumbnail?: string;
	tags: string[];
	liveUrl?: string;
	githubUrl?: string;
	featured?: boolean;
}

export function getProjectThumbnail(project: {
	thumbnail?: string;
	liveUrl?: string;
	githubUrl?: string;
}): string | undefined {
	if (project.thumbnail) {
		return project.thumbnail;
	}

	if (project.liveUrl) {
		return `https://api.microlink.io/?url=${encodeURIComponent(project.liveUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
	}

	if (project.githubUrl) {
		const match = project.githubUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
		if (match) {
			const [, owner, repo] = match;
			return `https://opengraph.githubassets.com/1/${owner}/${repo.replace(/\.git$/, "")}`;
		}
	}

	return undefined;
}

export const projects: Project[] = [
	{
		slug: "college-event-platform",
		title: "College Event Platform",
		description:
			"Campus event platform with PostgreSQL data modeling, attendance tracking, and authenticated role-based access control.",
		longDescription:
			"A centralized campus event management platform designed to streamline student club activities, registrations, and attendance tracking. Built with robust relational data modeling in PostgreSQL, enforcing complex attendance criteria, ticket validation, and authenticated role-based access control.",
		highlights: [
			"Engineered normalized PostgreSQL relational schema handling multi-club events, attendee ticketing, and check-in logs.",
			"Implemented secure API endpoints with authentication guards using Better Auth and Next.js server actions.",
			"Built validation constraints to prevent overbooking and enforce club-specific participant permissions.",
		],
		tags: ["Next.js", "TypeScript", "PostgreSQL", "Better Auth", "Tailwind CSS"],
		liveUrl: "https://eventlify-protocol.vercel.app",
		githubUrl: "https://github.com/kavyadeepdev/eventlify",
		featured: true,
	},
	{
		slug: "commit-ed",
		title: "COMMIT-ed",
		description:
			"GSoC-style college event platform connecting student contributors with partner repos, featuring project discovery and PR verification.",
		longDescription:
			"A platform developed for a college open-source initiative emulating Google Summer of Code (GSoC). Partnered with repository maintainers to allow student participants to contribute to real-world codebases, featuring project discovery, automated GitHub username validation, and PR contribution tracking.",
		highlights: [
			"Developed the project showcase catalog featuring live search, filtering, and repository submission guidelines.",
			"Implemented GitHub username verification pipelines during pull request submissions.",
			"Integrated contribution tracking and leaderboard scoring with SQLite persistent storage.",
		],
		tags: ["Node.js", "JavaScript", "SQLite", "GitHub API"],
		liveUrl: "https://commit-ed-protocol.vercel.app",
		githubUrl: "https://github.com/kavyadeepdev/Protocol_LeaderBoard",
		featured: true,
	},
	{
		slug: "eco-refund",
		title: "Eco Refund",
		description:
			"IoT Digital Twin simulator for reverse vending machines featuring OpenAI contamination detection and real-time MQTT telemetry.",
		longDescription:
			"A comprehensive IoT Digital Twin simulator that visualizes automated reverse vending machines for smart plastic recycling. Integrates OpenAI vision models for contamination classification, real-time MQTT message streams for telemetry, and simulated instant UPI financial payouts to incentivize sustainable habits.",
		highlights: [
			"Developed an interactive real-time Digital Twin simulating RVM sensors, compaction motors, and storage fill levels.",
			"Integrated OpenAI visual classification to detect foreign non-recyclable contaminants.",
			"Built MQTT event pipelines and an operator dashboard with Express and React.",
		],
		tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Express", "OpenAI"],
		liveUrl: "https://ecorefund.netlify.app",
		githubUrl: "https://github.com/kavyadeepdev/ecorefund",
		featured: true,
	},
	{
		slug: "simple-text-transfer-protocol",
		title: "Simple Text Transfer Protocol",
		description:
			"Custom application-layer messaging protocol built in C over POSIX TCP sockets with custom byte framing and encryption.",
		longDescription:
			"A low-level networking project implementing a bespoke client-server application protocol over POSIX TCP sockets. Implements custom byte framing, header validation, command parsing, and lightweight encryption.",
		highlights: [
			"Built a custom TCP application protocol from scratch using raw POSIX socket primitives in C.",
			"Implemented robust packet framing, boundary delimiter parsing, and error-handling routines.",
			"Integrated custom Caesar-cipher encryption/decryption on the wire.",
		],
		tags: ["C", "POSIX Sockets"],
		githubUrl: "https://github.com/kavyadeepdev/sttp",
	},
	{
		slug: "ble-mesh-chat",
		title: "BLE Mesh Chat",
		description:
			"Decentralized peer-to-peer mobile messaging app over Bluetooth Low Energy mesh networks with end-to-end encryption.",
		longDescription:
			"A decentralized, off-grid mobile communication application enabling peer-to-peer messaging without cellular service or Wi-Fi infrastructure by leveraging multi-hop Bluetooth Low Energy mesh topology.",
		highlights: [
			"Constructed a multi-peer mobile mesh client in React Native & Expo using BLE native bridge modules.",
			"Implemented end-to-end cryptographic message payloads transmitted hop-by-hop across nearby devices.",
			"Designed an intuitive chat UI with live node discovery and signal strength indicators.",
		],
		tags: ["Expo", "TypeScript", "React Native", "BLE"],
		githubUrl: "https://github.com/kavyadeepdev/ble-mesh-chat",
	},
	{
		slug: "personal-portfolio-website",
		title: "Personal Portfolio Website",
		description:
			"Developer portfolio showcasing engineering projects, interactive search, and tactile glassmorphic design.",
		longDescription:
			"The design system and portfolio engine showcasing my technical journey, open source projects, and software engineering experiments with rich tactile animations, frosted glass aesthetics, and instant search.",
		highlights: [
			"Built with modern static generation architecture for sub-50ms page loads.",
			"Implemented real-time client-side search, multi-technology filter selection, and URL sync.",
			"Designed tactile dark/light theme switching with circular radial View Transitions.",
		],
		tags: ["Next.js", "TypeScript", "Vercel"],
		liveUrl: "https://kavyadeep.dev",
		githubUrl: "https://github.com/kavyadeepdev/kavyadeep.dev",
	},
	{
		slug: "relieflink",
		title: "ReliefLink",
		description:
			"Offline-first disaster relief communications network relaying SOS beacons over BLE to emergency response consoles.",
		longDescription:
			"A disaster relief communications network that bridges isolated mobile devices to emergency response teams. Distress beacons propagate over BLE mesh to emergency gateways that queue and synchronize urgent SOS coordinates to cloud dashboards.",
		highlights: [
			"Architected an offline-first mesh-to-gateway relay architecture for search and rescue operations.",
			"Built an Express + React incident response console with real-time alert dispatching.",
			"Integrated low-latency BLE packet parsing and geographical SOS positioning.",
		],
		tags: ["TypeScript", "React", "Tailwind CSS", "Express", "Node.js", "BLE"],
		githubUrl: "https://github.com/kavyadeepdev/relief-link",
	},
	{
		slug: "algorithm-visualizer",
		title: "Algorithm Visualizer",
		description:
			"Real-time sorting algorithm visualizer written in C++ with hardware-accelerated SDL2 graphics.",
		longDescription:
			"A high-performance algorithm visualizer written in C++ using SDL2. Renders step-by-step sorting iterations with real-time bar height transitions, sound frequency pitch changes, and modular sorting strategy abstractions.",
		highlights: [
			"Rendered real-time visual sorting states using SDL2 hardware-accelerated graphics.",
			"Implemented Bubble, Merge, and Quick Sort algorithms with yieldable step-by-step execution state.",
			"Structured with a modular CMake build system for cross-platform compilation.",
		],
		thumbnail: "/thumbnails/algorithm-visualizer.png",
		tags: ["C++", "SDL2", "CMake"],
		githubUrl: "https://github.com/kavyadeepdev/algorithm-visualizer",
	},
	{
		slug: "cosmic-troopers",
		title: "Cosmic Troopers",
		description:
			"2D arcade space-shooter game built in Java and JavaFX featuring delta-time physics and AABB collision detection.",
		longDescription:
			"A retro 2D arcade space-shooter game built in Java and JavaFX featuring smooth Delta-time physics loops, particle explosion effects, custom sound effects, and Axis-Aligned Bounding Box (AABB) collision detection.",
		highlights: [
			"Engineered a frame-rate-independent 60 FPS game loop with delta-time physics calculation.",
			"Implemented AABB bounding-box collision detection for laser projectiles and enemy swarms.",
			"Shipped an executable release build packaged with custom sprite animations.",
		],
		thumbnail: "/thumbnails/cosmic-troopers.png",
		tags: ["Java", "JavaFX"],
		githubUrl: "https://github.com/kavyadeepdev/cosmic-troopers",
	},
];
