export default function Product() {
	return (
		<div className="flex gap-5 bg-blue-900">
			<div>
				<h1 className="text-3xl">HORÁRIRO</h1>
				<div className="flex-col m-2">
					<span>Aberto das 10h ás 20h</span>
					<br />
					<span>Última entrada ás 19h</span>
				</div>
				<button>HORÁRIO COMPLETO</button>
				<div className="flex-col"></div>
			</div>
			<div>
				<h1 className="text-3xl">BILHETES ONLINE</h1>
				<div className="flex-col m-2">
					<div className="flex flex-col">
						<span>Aquira já os seus bilhetes online.</span>
						<button className="flex border border-e-red-600">COMPRAR</button>
					</div>
				</div>
				<button className="border-white">HORÁRIO COMPLETO</button>
				<div className="flex-col"></div>
			</div>
		</div>
	);
}
