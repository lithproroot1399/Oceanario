import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
    return (
<div className="flex justify-between w-full mb-8">
    <Image
              className="flex"
              src="/logo.png"
              alt="Next.js logo"
              width={100}
              height={20}
              priority
            />
    <div className="flex">
        <IoSearchOutline size={24} className="ml-4"/>
    <span>EN</span>
    </div>
</div>

        
    );
} 