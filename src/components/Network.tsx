"use client"

import Image from "next/image"
import { FaNetworkWired, FaTools } from "react-icons/fa"
import { MdNetworkCell } from "react-icons/md"
import { MdVpnLock } from "react-icons/md"
import { TbNetwork } from "react-icons/tb"
import { GiServerRack } from "react-icons/gi"
import { useState } from "react"
import { c } from "react-icons/fa"
import Printers from "./Printers"

export default function Network() {
  const [showNetwork, setShowNetwork] = useState(false)
  const [showWiFi, setShowWiFi] = useState(false)
  const [showMdVpnLock, setShowMdVpnLock] = useState(false)
  return (
    <div className="flex gap-8 m-4">
      <main className="flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2">
          <p className="text-white text-lg font-bold">Rede Oceanário</p>
        </div>
        {/** biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => {
            setShowNetwork(!showNetwork)
            setShowNetwork(false)
          }}
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition cursor-pointer"
        >
          <GiServerRack className="text-blue-500 size-10" />
          <span className="text-xl font-semibold">SWITCHS</span>
        </button>

        {/** biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => {
            setShowNetwork(!showNetwork)
            setShowNetwork(false)
          }}
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition cursor-pointer"
        >
          <FaNetworkWired className="text-blue-500 size-10" />
          <span className="text-xl font-semibold">REDE ODL</span>
        </button>

        {/** biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => {
            setShowNetwork(!showNetwork)
            setShowNetwork(false)
          }}
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition cursor-pointer"
        >
          <TbNetwork className="size-10 text-blue-500" />
          <span className="text-xl font-semibold">VLANS</span>
        </button>

        {/** biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => {
            setShowNetwork(!showNetwork)
            setShowNetwork(false)
          }}
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition cursor-pointer"
        >
          <MdNetworkCell className="size-10 text-blue-500" />
          <span className="text-xl font-semibold">Wi-Fi</span>
        </button>
        {/** biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => {
            setShowWiFi(!showWiFi)
            setShowWiFi(false)
          }}
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition cursor-pointer"
        >
          <MdVpnLock className="size-10 text-blue-500" />
          <span className="text-xl font-semibold">VPN</span>
        </button>
        {/** biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          onClick={() => {
            setShowWiFi(!showWiFi)
            setShowWiFi(false)
          }}
          className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition cursor-pointer"
        >
          <FaTools className="size-10 text-blue-500" />
          <span className="text-xl font-semibold">TOOLS</span>
        </button>
      </main>
      <aside className="flex w-full items-center justify-center rounded-3xl bg-white p-6 shadow-lg md:w-2/3">
        <div className="w-full max-w-4xl text-center">
          <Image
            color="black"
            src="/Network.jpg"
            alt="Oceanario imagem destaque"
            width={900}
            height={600}
            className="mx-auto h-auto max-w-full rounded-3xl object-cover"
            priority
          />
        </div>
      </aside>
    </div>
  )
}
