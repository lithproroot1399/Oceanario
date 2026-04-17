import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaPinterest } from "react-icons/fa";


export default function Footer() {
	return (
		<div className="mt-8">
			<div className="flex bg-zinc-200 gap-4">
			<div className="flex flex-col m-15 gap-6">
				<Image
				color="black"
				className="flex"
				src="/Logo-Oceanario-de-Lisboa_Footer.png"
				alt="Oceanario logo"
				width={200}
				height={60}
				priority
			/>
			

			<span className="text-black">
				Esplanada D. Carlos I - 1990-005 Lisboa
			</span>
			<div className="flex flex-col gap-1">
<div className="flex flex-col gap-1">
				<div className="flex gap-1">
				<strong className="text-black">Email:</strong>
			<span className="text-black">info@oceanariolisboa.pt</span>
			</div>
			<div className="flex gap-1">
			<strong className="text-black">Telefone:</strong>
			<span className="text-black">+351 218 917 000</span>
			</div>
			<span className="text-black font-normal">[Chamada para a rede fixa nacional]</span>
			</div>

</div>
			
				
			<div className="flex gap-x-4 text-black">
				<IoLogoFacebook className="size-6"/>
				<FaInstagram className="size-6"/>
				<FaYoutube className="size-6"/>
				<FaLinkedin className="size-6"/>
				<FaPinterest className="size-6"/>
			</div>
			</div>
			
			
		<div className="flex m-15 gap-x-10">
			<div>
			{/** biome-ignore lint/a11y/useButtonType: <explanation> */}
<button className="text-black border border-black px-4 py-2">
				BILHETES ONLINE <br />COMPRAR
			</button>	
			</div>
			<h1 className="text-black text-3xl font-bold">
Subscreva a newsletter <br />
do Oceanário</h1>	
		</div>
		
			</div>
		</div>
		
		
	);
}
