"use client"

import Image from "next/image"
import { FaDropbox } from "react-icons/fa"
import { FaMicrosoft } from "react-icons/fa"
import { BsCloudPlusFill } from "react-icons/bs"
import { CiMail } from "react-icons/ci"
import { BsGlobeAmericas } from "react-icons/bs"
import { FaNetworkWired } from "react-icons/fa6"
import { RiDashboard2Fill } from "react-icons/ri"
import { IoLockOpen } from "react-icons/io5"
import { MdOutlineElectricCar } from "react-icons/md"
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
            href="http://10.2.1.122:8100/index.html#!/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <IoLockOpen className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">SALTO</span>
          </a>
          <a
            href="https://evmanager.efimob.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <MdOutlineElectricCar className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">EFIMOB</span>
          </a>

          <a
            href="https://mytho.oceanario.pt:5005/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <BsGlobeAmericas className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">MYTHO</span>
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
            href="http://localhost:5173/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <RiDashboard2Fill className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">DASHBOARD</span>
          </a>
        </aside>

        <main className="flex w-full items-center justify-center rounded-3xl bg-white p-6 shadow-lg md:w-2/3">
          <div className="w-full max-w-4xl text-center">
            <div className="flex">
              <Image
                color="black"
                className="flex"
                src="/Logo.png"
                alt="Oceanario logo"
                width={200}
                height={60}
                priority
              />
            </div>
            <Image
              color="black"
              src="/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
              alt="Oceanario imagem destaque"
              width={900}
              height={600}
              className="mx-auto h-auto max-w-full rounded-3xl object-cover"
              priority
            />
          </div>
        </main>
      </div>
    </div>
  )
}
