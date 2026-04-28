"use client"

import Image from "next/image"

import { BsCloudPlusFill } from "react-icons/bs"
import { MdRoomPreferences } from "react-icons/md"
import { BsGlobeAmericas } from "react-icons/bs"

import { IoLockOpen } from "react-icons/io5"
import { MdOutlineElectricCar } from "react-icons/md"

export default function Webapp() {
  return (
    <div className="min-h-screen bg-black p-4">
      <div className="mx-auto flex flex-col gap-6 md:flex-row max-w-7xl">
        <aside className="w-full rounded-3xl bg-white p-6 shadow-lg md:w-1/3">
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
            href="https://mytho.oceanario.pt:5005/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <MdRoomPreferences className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">SALAS DE REUNIÃO</span>
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
