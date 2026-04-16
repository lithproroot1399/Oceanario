import Image from "next/image";
import { FaDropbox } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";
import { BsCloudPlusFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsGlobeAmericas } from "react-icons/bs";


export default function Service() {
	return (
		<div className="flex flex-col m-4 gap-4">
		
			<a
					href="https://entra.microsoft.com/auth/login/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 hover:bg-white hover:text-black p-2 rounded transition"
				>
					<FaMicrosoft className="size-10 text-blue-500"/>
					<h1 className="text-2xl font-bold text-blue-500">MICROSOFT</h1>
				</a>
				
				<a
					href="https://www.dropbox.com/home"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 hover:bg-white hover:text-black p-2 rounded transition"
				>
					<FaDropbox className="size-10 text-blue-500"/>
					<h1 className="text-2xl font-bold text-blue-500">DROPBOX</h1>
				</a>
				

				

				<a
					href="https://claranetpt.service-now.com/now/nav/ui/classic/params/target/%24pa_dashboard.do"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 hover:bg-white hover:text-black p-2 rounded transition"
				>
					<BsCloudPlusFill className="size-10 text-blue-500"/>
					<h1 className="text-2xl font-bold text-blue-500">SERVICE DESK</h1>
				</a>

				<a
					href="https://alvov3.primaveraspace.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 hover:bg-white hover:text-black p-2 rounded transition"
				>
					<FaHome className="size-10 text-blue-500"/>
					<h1 className="text-2xl font-bold text-blue-500">OMINIA</h1>
				</a>

				<a
					href="https://mytho.oceanario.pt:5005/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 hover:bg-white hover:text-black p-2 rounded transition"
				>
					<BsGlobeAmericas className="size-10 text-blue-500"/>
					<h1 className="text-2xl font-bold text-blue-500">MYTHO</h1>
				</a>

				<a
					href="https://admin.cloud.microsoft/?referrer=entra#/SharedMailbox/:/MailboxDetails/354b021d-a5c0-4d39-9731-3af5a19040f0"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 hover:bg-white hover:text-black p-2 rounded transition"
				>
					<CiMail className="size-10 text-blue-500"/>
					<h1 className="text-2xl font-bold text-blue-500">MAILBOXES</h1>
				</a>
			</div>
		
		
	);
}
