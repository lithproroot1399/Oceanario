"use client"

import Image from "next/image"
import { FaStoreAlt } from "react-icons/fa"
import { GrConfigure } from "react-icons/gr"
import { GiPoliceOfficerHead } from "react-icons/gi"
import { useState } from "react"
import { FcPrint } from "react-icons/fc"
import { PiBuildingOfficeBold } from "react-icons/pi"
import { MdBiotech } from "react-icons/md"

export default function Printers() {
  const [showSeguranca, setShowSeguranca] = useState(false)
  const [showLoja, setShowLoja] = useState(false)
  const [showBms, setShowBms] = useState(false)
  return (
    <div className="flex gap-8 m-4">
      <main className="flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2">
          <FcPrint className="size-10" />
          <p className="text-black text-lg font-bold">Impressoras Oceanário</p>
        </div>
        {/** biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => {
            setShowSeguranca(!showSeguranca)
            setShowLoja(false)
          }}
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition cursor-pointer"
        >
          <GiPoliceOfficerHead className="size-10 text-blue-500" />
          <span className="text-xl font-semibold">SEGURANÇA</span>
        </button>
        {/** biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => {
            setShowLoja(!showLoja)
            setShowSeguranca(false)
          }}
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition cursor-pointer"
        >
          <FaStoreAlt className="size-10 text-blue-500" />
          <span className="text-xl font-semibold">LOJA</span>
        </button>

        <a
          href="https://10.1.100.30/properties/authentication/login.php?redir=/stat/welcome.php"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
        >
          <GrConfigure className="size-10 text-blue-500" />
          <span className="text-xl font-semibold">BMS</span>
        </a>

        <a
          href="https://10.1.100.36/properties/authentication/login.php?redir=/stat/welcome.php"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
        >
          <PiBuildingOfficeBold className="size-10 text-blue-500" />
          <span className="text-xl font-semibold">OFFICE</span>
        </a>

        <a
          href="https://10.1.100.30/properties/authentication/login.php?redir=/stat/welcome.php"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
        >
          <MdBiotech className="size-10 text-blue-500" />
          <span className="text-xl font-semibold">BIOLOGIA</span>
        </a>
      </main>
      <div className="flex-1 flex items-center justify-center">
        {showSeguranca && (
          <Image
            src="/Print_Seguranca.png"
            alt="Print Segurança"
            width={800}
            height={400}
            className="h-auto max-w-full rounded-3xl object-cover"
            priority
          />
        )}
        {showLoja && (
          <Image
            src="/Print_Loja.png"
            alt="Print Loja"
            width={800}
            height={400}
            className="h-auto max-w-full rounded-3xl object-cover"
            priority
          />
        )}
      </div>
    </div>
  )
}
