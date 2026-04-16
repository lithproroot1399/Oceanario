import { FaUsers } from "react-icons/fa";
import { IoMapSharp } from "react-icons/io5";

export default function Product() {
	return (
		<div className="flex w-full justify-between gap-5 bg-blue-950 p-8 text-white min-h-96">
			<div>
				<h1 className="text-3xl font-bold mb-4">HORÁRIO</h1>
				<div className="flex flex-col gap-2">
					<span>Aberto das 10h às 20h</span>
					<span>Última entrada às 19h</span>
				</div>
				<button
					type="button"
					className="flex border rounded-md border-white px-4 py-2 mt-6 hover:bg-white hover:text-blue-950 transition"
				>
					HORÁRIO COMPLETO
				</button>
			</div>
			<div>
				<h1 className="text-3xl font-bold mb-4">BILHETES ONLINE</h1>
				<div className="flex flex-col gap-2">
					<span>Adquira já os seus bilhetes online.</span>
					<button
						type="button"
						className="flex items-center justify-center border rounded-md border-white px-4 py-2 mt-2 hover:bg-white hover:text-blue-950 transition"
					>
						COMPRAR
					</button>
				</div>
			</div>
			<div>
				<h1 className="text-3xl font-bold mb-4">PLANEAR VISITA</h1>
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-2">
						<IoMapSharp className="size-6" />
						<span>Como chegar</span>
					</div>
					<div className="flex items-center gap-2">
						<FaUsers className="size-6" />
						<span>Visitas guiadas</span>
					</div>
				</div>
			</div>
		</div>
	);
}
