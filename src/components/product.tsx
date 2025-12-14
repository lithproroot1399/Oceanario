import { FaUsers } from "react-icons/fa";
import { IoMapSharp } from "react-icons/io5";

export default function Product() {
	return (
		<div className="flex gap-5 bg-blue-900 p-4 text-white">
			<div>
				<h1 className="text-3xl">HORÁRIO</h1>
				<div className="flex-col m-2">
					<span>Aberto das 10h às 20h</span>
					<br />
					<span>Última entrada às 19h</span>
				</div>
				<button type="button">HORÁRIO COMPLETO</button>
				<div className="flex-col"></div>
			</div>
			<div>
				<h1 className="text-3xl">BILHETES ONLINE</h1>
				<div className="flex-col m-2">
					<div className="flex flex-col">
						<span>Adquira já os seus bilhetes online.</span>
						<button
							type="button"
							className="flex border rounded-b-md border-white px-3 py-1 mt-2"
						>
							COMPRAR
						</button>
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-3xl">PLANEAR VISITA</h1>
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
	);
}
