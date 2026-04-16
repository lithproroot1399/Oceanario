import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";

export default function Footer() {
	return (
		<div className="flex flex-col bg-zinc-400 gap-4">
			<Image
				color="black"
				className="flex"
				src="/Logo-Oceanario-de-Lisboa_Footer.png"
				alt="Oceanario logo"
				width={100}
				height={20}
				priority
			/>
			<p className="text-black font-bold text-3xl">Oceanário de Lisboa</p>

			<span className="text-black">
				Esplanada Dom Carlos I, s/n, 1990-005, Lisboa, Portugal
			</span>
			<span className="text-black">NIF 503295604</span>

			<div className="flex gap-2 text-black">
				<IoLogoFacebook />
				<FaInstagram />
				<FaYoutube />
				<FaLinkedin />
			</div>
		</div>
	);
}
