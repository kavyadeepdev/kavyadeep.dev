import { Cal_Sans } from "next/font/google";
import { LuSend } from "react-icons/lu";

const calSans = Cal_Sans({
	weight: "400",
	subsets: ["latin"],
});

export default function ContactPage() {
	return (
		<section className="flex flex-col justify-start md:justify-center min-h-full w-full max-w-[40rem] pt-8 md:pt-[8rem] pb-16 gap-6 md:gap-8">
			<h2 className={`${calSans.className} text-gray-700 text-3xl sm:text-4xl`}>
				{/* <div className="mb-4">✉️</div> */}
				{`Message ✉️`}
			</h2>
			<form action="" className="flex flex-col gap-4 w-full">
				<div className="w-full flex flex-col sm:flex-row gap-4">
					<input
						type="text"
						placeholder="Name"
						className="bg-gray-100 px-4 py-2 rounded-xl flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
					/>
					<input
						type="email"
						placeholder="Email"
						className="bg-gray-100 px-4 py-2 rounded-xl flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
					/>
				</div>
				<textarea
					placeholder="Message"
					className="bg-gray-100 px-4 py-2 rounded-xl h-48 md:h-[20rem] focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm resize-none"
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white py-2 rounded-xl font-bold flex justify-center items-center hover:cursor-pointer hover:bg-blue-600 transition"
				>
					<LuSend className="mt-0.5 mr-1 text-lg" />
					Send
				</button>
			</form>
		</section>
	);
}
