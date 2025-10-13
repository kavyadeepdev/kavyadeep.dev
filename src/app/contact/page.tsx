import { Cal_Sans } from "next/font/google";
import { LuSend } from "react-icons/lu";
const calSans = Cal_Sans({
	weight: "400",
	subsets: ["latin"],
});
export default function ContactPage() {
	return (
		<section className="flex flex-col justify-center h-full w-[40rem] pt-[8rem] gap-8">
			<h2 className={`${calSans.className} text-gray-700 text-4xl`}>
				{/* <div className="mb-4">✉️</div> */}
				{`Message ✉️`}
			</h2>
			<form action="" className="flex flex-col gap-4 h-full w-full">
				<div className="w-full flex gap-4">
					<input
						type="text"
						placeholder="Name"
						className="bg-gray-100 px-4 py-2 rounded-xl flex-1/2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
					/>
					<input
						type="email"
						placeholder="Email"
						className="bg-gray-100 px-4 py-2 rounded-xl flex-1/2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
					/>
				</div>
				<textarea
					placeholder="Message"
					className="bg-gray-100 px-4 py-2 rounded-xl h-[20rem] focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm"
				/>
				<button
					type="submit"
					className="bg-blue-500 text-white py-2 rounded-xl font-bold flex justify-center hover:cursor-pointer hover:bg-blue-600"
				>
					<LuSend className="mt-0.5 mr-1 text-lg" />
					Send
				</button>
			</form>
		</section>
	);
}
