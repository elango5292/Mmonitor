"use client"
import { ChevronDown, Cog, Clock, RefreshCcw, Package, Factory } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react"
import React from "react";
import Sbar from "@/components/Sbar";
import Npie from "@/components/Npie"
import Cline from "@/components/Cline";
export default function Home() {
  const [from, setFrom] = useState(new Date().toISOString().substr(0, 10));
  const [to, setTo] = useState(new Date().toISOString().substr(0, 10));
  const [Oee, setOee] = useState(0);
  
  useEffect(() => {
    setInterval(() => {
let availability = Math.random().toFixed(2)
let performance = Math.random().toFixed(2)
let quality = Math.random().toFixed(2)
      setOee((availability*performance*quality*100).toFixed(2))

    }, 2000)
    return () => {
      clearInterval()
    }
    
  }, [])
  return (
    <main className="flex min-h-screen gap-y-1 flex-col bg-gradient-to-b from-black to-[#000000]  p-4">
      <div className="flex flex-row justify-between items-center">

        <div
          className="w-[177px] flex flex-row cursor-pointer !hover:bg-[#1e1e1e]  items-center justify-centerh-[47px] rounded-md border border-[#4a4a4a] shadow-inner shadow-black/25"
          style={{ background: "linear-gradient(180.32deg, #363638 0.3%, #242426 99.74%)" }}
        >
          <Cog className="w-6 h-6 m-2 text-[#aeaeb2]" />
          <p className="text-sm text-left text-[#aeaeb2]">Machine-1</p>
          <ChevronDown className="w-6 h-6 m-2 text-[#aeaeb2]" />
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <div className="flex flex-row gap-x-1 items-center">
            <p className="text-[#AEAEB2] text-[12px]">From</p>
            <input type="date" defaultValue={from} onChange={(e) => setFrom(e.target.value)} className="w-[122px] h-[35px] px-2 text-[#AEAEB2] text-[12px] rounded-md border-2 border-[#4a4a4a]"
              style={{ background: "linear-gradient(180.32deg, #252525 0.3%, #000 99.74%)" }} />
          </div>
          <><svg
            width={68}
            height={6}
            viewBox="0 0 68 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM62.3333 2.99999C62.3333 4.47275 63.5272 5.66666 65 5.66666C66.4728 5.66666 67.6667 4.47275 67.6667 2.99999C67.6667 1.52723 66.4728 0.333328 65 0.333328C63.5272 0.333328 62.3333 1.52724 62.3333 2.99999ZM4.9375 3.5C5.21364 3.5 5.4375 3.27614 5.4375 3C5.4375 2.72386 5.21364 2.5 4.9375 2.5L4.9375 3.5ZM8.8125 2.5C8.53636 2.5 8.3125 2.72386 8.3125 3C8.3125 3.27614 8.53636 3.5 8.8125 3.5L8.8125 2.5ZM12.6875 3.5C12.9636 3.5 13.1875 3.27614 13.1875 3C13.1875 2.72386 12.9636 2.5 12.6875 2.5L12.6875 3.5ZM16.5625 2.5C16.2864 2.5 16.0625 2.72386 16.0625 3C16.0625 3.27614 16.2864 3.5 16.5625 3.5L16.5625 2.5ZM20.4375 3.5C20.7136 3.5 20.9375 3.27614 20.9375 3C20.9375 2.72386 20.7136 2.5 20.4375 2.5L20.4375 3.5ZM24.3125 2.5C24.0364 2.5 23.8125 2.72386 23.8125 3C23.8125 3.27614 24.0364 3.5 24.3125 3.5L24.3125 2.5ZM28.1875 3.5C28.4636 3.5 28.6875 3.27614 28.6875 3C28.6875 2.72386 28.4636 2.5 28.1875 2.5L28.1875 3.5ZM32.0625 2.5C31.7864 2.5 31.5625 2.72386 31.5625 3C31.5625 3.27614 31.7864 3.5 32.0625 3.5L32.0625 2.5ZM35.9375 3.5C36.2136 3.5 36.4375 3.27614 36.4375 3C36.4375 2.72385 36.2136 2.5 35.9375 2.5L35.9375 3.5ZM39.8125 2.5C39.5364 2.5 39.3125 2.72385 39.3125 3C39.3125 3.27614 39.5364 3.5 39.8125 3.5L39.8125 2.5ZM43.6875 3.5C43.9636 3.5 44.1875 3.27614 44.1875 3C44.1875 2.72385 43.9636 2.5 43.6875 2.5L43.6875 3.5ZM47.5625 2.5C47.2864 2.5 47.0625 2.72385 47.0625 3C47.0625 3.27614 47.2864 3.5 47.5625 3.5L47.5625 2.5ZM51.4375 3.5C51.7136 3.5 51.9375 3.27614 51.9375 3C51.9375 2.72385 51.7136 2.5 51.4375 2.5L51.4375 3.5ZM55.3125 2.5C55.0364 2.5 54.8125 2.72385 54.8125 3C54.8125 3.27614 55.0364 3.5 55.3125 3.5L55.3125 2.5ZM59.1875 3.5C59.4636 3.5 59.6875 3.27614 59.6875 3C59.6875 2.72385 59.4636 2.5 59.1875 2.5L59.1875 3.5ZM63.0625 2.49999C62.7864 2.49999 62.5625 2.72385 62.5625 2.99999C62.5625 3.27614 62.7864 3.49999 63.0625 3.49999L63.0625 2.49999ZM3 3.5L4.9375 3.5L4.9375 2.5L3 2.5L3 3.5ZM8.8125 3.5L12.6875 3.5L12.6875 2.5L8.8125 2.5L8.8125 3.5ZM16.5625 3.5L20.4375 3.5L20.4375 2.5L16.5625 2.5L16.5625 3.5ZM24.3125 3.5L28.1875 3.5L28.1875 2.5L24.3125 2.5L24.3125 3.5ZM32.0625 3.5L35.9375 3.5L35.9375 2.5L32.0625 2.5L32.0625 3.5ZM39.8125 3.5L43.6875 3.5L43.6875 2.5L39.8125 2.5L39.8125 3.5ZM47.5625 3.5L51.4375 3.5L51.4375 2.5L47.5625 2.5L47.5625 3.5ZM55.3125 3.5L59.1875 3.5L59.1875 2.5L55.3125 2.5L55.3125 3.5ZM63.0625 3.49999L65 3.49999L65 2.49999L63.0625 2.49999L63.0625 3.49999ZM0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM62.3333 2.99999C62.3333 4.47275 63.5272 5.66666 65 5.66666C66.4728 5.66666 67.6667 4.47275 67.6667 2.99999C67.6667 1.52723 66.4728 0.333328 65 0.333328C63.5272 0.333328 62.3333 1.52724 62.3333 2.99999ZM4.9375 3.5C5.21364 3.5 5.4375 3.27614 5.4375 3C5.4375 2.72386 5.21364 2.5 4.9375 2.5L4.9375 3.5ZM8.8125 2.5C8.53636 2.5 8.3125 2.72386 8.3125 3C8.3125 3.27614 8.53636 3.5 8.8125 3.5L8.8125 2.5ZM12.6875 3.5C12.9636 3.5 13.1875 3.27614 13.1875 3C13.1875 2.72386 12.9636 2.5 12.6875 2.5L12.6875 3.5ZM16.5625 2.5C16.2864 2.5 16.0625 2.72386 16.0625 3C16.0625 3.27614 16.2864 3.5 16.5625 3.5L16.5625 2.5ZM20.4375 3.5C20.7136 3.5 20.9375 3.27614 20.9375 3C20.9375 2.72386 20.7136 2.5 20.4375 2.5L20.4375 3.5ZM24.3125 2.5C24.0364 2.5 23.8125 2.72386 23.8125 3C23.8125 3.27614 24.0364 3.5 24.3125 3.5L24.3125 2.5ZM28.1875 3.5C28.4636 3.5 28.6875 3.27614 28.6875 3C28.6875 2.72386 28.4636 2.5 28.1875 2.5L28.1875 3.5ZM32.0625 2.5C31.7864 2.5 31.5625 2.72386 31.5625 3C31.5625 3.27614 31.7864 3.5 32.0625 3.5L32.0625 2.5ZM35.9375 3.5C36.2136 3.5 36.4375 3.27614 36.4375 3C36.4375 2.72385 36.2136 2.5 35.9375 2.5L35.9375 3.5ZM39.8125 2.5C39.5364 2.5 39.3125 2.72385 39.3125 3C39.3125 3.27614 39.5364 3.5 39.8125 3.5L39.8125 2.5ZM43.6875 3.5C43.9636 3.5 44.1875 3.27614 44.1875 3C44.1875 2.72385 43.9636 2.5 43.6875 2.5L43.6875 3.5ZM47.5625 2.5C47.2864 2.5 47.0625 2.72385 47.0625 3C47.0625 3.27614 47.2864 3.5 47.5625 3.5L47.5625 2.5ZM51.4375 3.5C51.7136 3.5 51.9375 3.27614 51.9375 3C51.9375 2.72385 51.7136 2.5 51.4375 2.5L51.4375 3.5ZM55.3125 2.5C55.0364 2.5 54.8125 2.72385 54.8125 3C54.8125 3.27614 55.0364 3.5 55.3125 3.5L55.3125 2.5ZM59.1875 3.5C59.4636 3.5 59.6875 3.27614 59.6875 3C59.6875 2.72385 59.4636 2.5 59.1875 2.5L59.1875 3.5ZM63.0625 2.49999C62.7864 2.49999 62.5625 2.72385 62.5625 2.99999C62.5625 3.27614 62.7864 3.49999 63.0625 3.49999L63.0625 2.49999ZM3 3.5L4.9375 3.5L4.9375 2.5L3 2.5L3 3.5ZM8.8125 3.5L12.6875 3.5L12.6875 2.5L8.8125 2.5L8.8125 3.5ZM16.5625 3.5L20.4375 3.5L20.4375 2.5L16.5625 2.5L16.5625 3.5ZM24.3125 3.5L28.1875 3.5L28.1875 2.5L24.3125 2.5L24.3125 3.5ZM32.0625 3.5L35.9375 3.5L35.9375 2.5L32.0625 2.5L32.0625 3.5ZM39.8125 3.5L43.6875 3.5L43.6875 2.5L39.8125 2.5L39.8125 3.5ZM47.5625 3.5L51.4375 3.5L51.4375 2.5L47.5625 2.5L47.5625 3.5ZM55.3125 3.5L59.1875 3.5L59.1875 2.5L55.3125 2.5L55.3125 3.5ZM63.0625 3.49999L65 3.49999L65 2.49999L63.0625 2.49999L63.0625 3.49999Z"
              fill="#AEAEB2"
            />
          </svg></>
          <div className="flex flex-row gap-x-1 items-center">
            <p className="text-[#AEAEB2] text-[12px]">To</p>
            <input type="date" defaultValue={from} onChange={(e) => setFrom(e.target.value)} className="w-[122px] h-[35px] px-2 text-[#AEAEB2] text-[12px] rounded-md border-2 border-[#4a4a4a]"
              style={{ background: "linear-gradient(180.32deg, #252525 0.3%, #000 99.74%)" }} />
          </div>


        </div>
      </div>
      <div
        className="w-[98vw] h-[145px] mt-[35px] flex flex-row border items-center justify-between px-4 border-[#2a2a2a] shadow-inner shadow-[#121212] rounded-sm "
        style={{
          background: "linear-gradient(179.61deg, rgba(28,28,28,0.5) 2.8%, rgba(41,41,41,0.5) 99.93%)",
        }}
      >
        <div className="flex flex-col  text-[#aeaeb2]">
          <div className="flex flex-row items-center h-auto">
            <Clock className="w-[16px] h-[16px] mr-1" />
            <>
              <p className="text-base font-bold  ">Total uptime: 5hrs</p></></div>

          <><p className="text-sm ml-1 text-left text-[#aeaeb2]">Up since: 08:00AM</p></>
          <><p className="text-sm ml-1 text-left text-[#aeaeb2]">Prod. time: 4hrs</p></>
          <><p className="text-sm ml-1 text-left text-[#aeaeb2]">Idle time: 1hrs</p></>
        </div>
        <div className="w-[1px]   h-full bg-[#252525]" />
        <div className="flex flex-col text-[#aeaeb2]">
          <div className="flex flex-row items-center h-auto">
            <RefreshCcw className="w-[16px] h-[16px] mr-1" />
            <>
              <p className="text-base font-bold ">Total cycles: 2000</p></></div>
          <><p className="text-sm text-left ml-1 text-[#aeaeb2]">Avg. CPH: 400</p></>
          <><p className="text-sm text-left ml-1 text-[#aeaeb2]">Avg. Cycle gap: 2min</p></>

        </div>
        <div className="w-[1px] h-full bg-[#252525]" />
        <div className="flex flex-col text-[#aeaeb2]">
          <div className="flex flex-row items-center h-auto">
            <Package className="w-[16px] h-[16px] mr-1" />
            <>
              <p className="text-base font-bold ">Efficiency score: 60%</p></></div>
          <><p className="text-sm text-left ml-1 text-[#aeaeb2]">Throughput: 50</p></>
          <><p className="text-sm text-left ml-1 text-[#aeaeb2]">Capacity utilisation: 2min</p></>
          <><p className="text-sm text-left ml-1 text-[#aeaeb2]">Time utilisation: 2min</p></>
        </div>
        <div className="w-[1px] h-full bg-[#252525]" />
        <div className="flex flex-col text-[#aeaeb2]">
          <div className="flex flex-row items-center h-auto">
            <Factory className="w-[16px] mr-1 h-[16px]" />
            <>
              <p className="text-base font-bold ">Total Production: 700</p></></div>
          <><p className="text-sm text-left text-[#aeaeb2]">Premium Grade: 500</p></>
          <><p className="text-sm text-left text-[#aeaeb2]">Standard Grade: 200</p></>
          <><p className="text-sm text-left text-[#aeaeb2]">Scraped: 200</p></>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="w-screen justify-center flex mt-[20px] flex-row px-1 gap-x-4 py-1 mx-auto">


        <div className="w-1/2 h-[588px] border border-[#2a2a2a]"
          style={{
            background: "linear-gradient(179.61deg, rgba(28,28,28,0.5) 2.8%, rgba(41,41,41,0.5) 99.93%)",
          }}>
            <Sbar />
          </div>



        <div className="flex flex-col w-[718px] gap-y-2">
          <div
            className="w-full flex flex-row justify-center items-center h-[357px] border border-[#2a2a2a]"
            style={{
              background: "linear-gradient(179.61deg, rgba(28,28,28,0.5) 2.8%, rgba(41,41,41,0.5) 99.93%)",
            }}>

            
              < Cline/>
            </div>
          <div
            className="flex flex-row w-full h-auto justify-between items-center">
            <div
              className="w-[49%] text-3xl p-2 text-[#aeaeb2] font-black flex flex-row justify-center items-center h-56 border border-[#2a2a2a]"
              style={{
                background: "linear-gradient(179.61deg, rgba(28,28,28,0.5) 2.8%, rgba(41,41,41,0.5) 99.93%)",
              }}
            >OEE: {Oee}%</div>
             <div
              className="w-[49%] h-56 border border-[#2a2a2a]"
              style={{
                background: "linear-gradient(179.61deg, rgba(28,28,28,0.5) 2.8%, rgba(41,41,41,0.5) 99.93%)",
              }}
            >
             < Npie />
              </div>

          </div>

        </div>
      </div>
    </main>
  );
}
