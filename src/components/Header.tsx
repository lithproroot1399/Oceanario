import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
    return (
        <div className="flex justify-between w-full mb-8 items-center">
            <Image
                className="flex"
                src="/logo.png"
                alt="Oceanario logo"
                width={100}
                height={20}
                priority
            />
            
            <nav>
                <ul className="flex gap-6 list-none m-0 p-0">
                    <li><a href="#bilhetes" className="hover:underline">BILHETES</a></li>
                    <li><a href="#visita" className="hover:underline">VISITA</a></li>
                    <li><a href="#exposicoes" className="hover:underline">EXPOSIÇÕES</a></li>
                    <li><a href="#programas" className="hover:underline">PROGRAMAS</a></li>
                    <li><a href="#conservacao" className="hover:underline">CONSERVAÇÃO</a></li>
                    <li><a href="#empresas" className="hover:underline">EMPRESAS</a></li>
                </ul>
            </nav>

            <div className="flex gap-4 items-center">
                <IoSearchOutline size={24} className="cursor-pointer" />
                <span className="cursor-pointer hover:underline">CONTACTOS</span>
                <span className="cursor-pointer hover:underline">EN</span>
            </div>
        </div>
    );
}