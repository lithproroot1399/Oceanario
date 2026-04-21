import Image from "next/image";
import { FaStoreAlt } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { GiPoliceOfficerHead } from "react-icons/gi";

export default function Printers() {
    return (
        <div>
            <p>Impressoras Oceanário</p>
            <div>
<a
                        href="https://10.1.100.32/stat/welcome.php?tab=status"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
                    >
                        <GiPoliceOfficerHead className="size-10 text-blue-500" />
                        <span className="text-xl font-semibold">SEGURANÇA</span>
                    </a>
                <Image
                                                color="black"
                                                src="/Print_Seguranca.png"
                                                alt="Print Segurança"
                                                width={800}
                                                height={400}
                                                className="mx-auto h-auto max-w-full rounded-3xl object-cover"
                                                priority
                                            />

            </div>
<div>
    <a
                        href="https://10.1.100.34/stat/welcome.php?tab=status"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
                    >
                        <FaStoreAlt className="size-10 text-blue-500" />
                        <span className="text-xl font-semibold">LOJA</span>
                    </a>

                      <Image
                                                color="black"
                                                src="/Print_Loja.png"
                                                alt="Print Loja"
                                                width={800}
                                                height={400}
                                                className="mx-auto h-auto max-w-full rounded-3xl object-cover"
                                                priority
                                            />
    </div>            
            

                                

                    <a
                        href="https://10.1.100.30/properties/authentication/login.php?redir=/stat/welcome.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
                    >
                        <GrConfigure className="size-10 text-blue-500" />
                        <span className="text-xl font-semibold">BMS</span>
                    </a>            

                     


        </div>
    )
}