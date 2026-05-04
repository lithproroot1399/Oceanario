"use client"

import Image from "next/image"
import { FaDropbox } from "react-icons/fa"
import { FaMicrosoft } from "react-icons/fa"
import { BsCloudPlusFill } from "react-icons/bs"
import { CiMail } from "react-icons/ci"
import { SiAppstore } from "react-icons/si"
import { FaNetworkWired } from "react-icons/fa6"
import { RiDashboard2Fill } from "react-icons/ri"
import { GiAquarium } from "react-icons/gi"
import { AiFillPrinter } from "react-icons/ai"

export default function Service() {
  return (
    <div className="min-h-screen bg-black p-4">
      <div className="mx-auto flex flex-col gap-6 md:flex-row max-w-7xl">
        <aside className="w-full rounded-3xl bg-white p-6 shadow-lg md:w-1/3">
          <a
            href="https://entra.microsoft.com/auth/login/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <FaMicrosoft className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">MICROSOFT</span>
          </a>

          <a
            href="https://admin.cloud.microsoft/?referrer=entra#/SharedMailbox/:/MailboxDetails/354b021d-a5c0-4d39-9731-3af5a19040f0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <CiMail className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">MAILBOXES</span>
          </a>

          <a
            href="https://www.dropbox.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <FaDropbox className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">DROPBOX</span>
          </a>

          <a
            href="https://claranetpt.service-now.com/now/nav/ui/classic/params/target/%24pa_dashboard.do"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <BsCloudPlusFill className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">SERVICE DESK</span>
          </a>

          <a
            href="/network"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <FaNetworkWired className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">NETWORK</span>
          </a>

          <a
            href="/printers"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <AiFillPrinter className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">PRINTERS</span>
          </a>

          <a
            href="http://localhost:5174/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <RiDashboard2Fill className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">DASHBOARD</span>
          </a>

          <a
            href="/webapp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <SiAppstore className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">OUR APPS</span>
          </a>

          <a
            href="/webapp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <GiAquarium className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">GTC / BMS</span>
          </a>
        </aside>

        <main className="flex w-full items-center justify-center rounded-3xl bg-white p-6 shadow-lg md:w-2/3">
          <div className="w-full max-w-4xl text-center">
            <div className="flex items-center justify-center mb-6">
              <Image
                color="black"
                className="flex"
                src="/Logo.png"
                alt="Oceanario logo"
                width={400}
                height={80}
                priority
              />
            </div>

            {/* Substituição da Imagem pelo Vídeo */}
            <div className="relative overflow-hidden rounded-3xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="mx-auto h-auto w-full max-w-full rounded-3xl object-cover"
              >
                <source src="/IMAGENS WEBSITE 13.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
