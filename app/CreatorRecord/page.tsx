"use client"

import { Background } from "@/components/squareanima";

export default function CreatorRecord() {
    return (
        <>
            <Background />
            <h1 className="text-4xl text-center text-white mt-1">FAÇA FICHA</h1>
            <main className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-4/5 flex mb-3 space-x-1">
                    <button className="text-xl text-white bg-[#E1604F] hover:bg-[#E1604F] rounded-[3px] w-[15%]">Main</button>
                    <button className="text-xl text-white hover:bg-[#E1604F] rounded-[3px] w-[15%]">Skills</button>
                    <button className="text-xl text-white hover:bg-[#E1604F] rounded-[3px] w-[15%]">Inventory</button>
                </div>
                <section className="flex justify-center items-center bg-[#4B4869] w-4/5 h-3/4 rounded-[3px] space-x-2">
                    <div className="shadow-Page bg-[#666948] w-[47%] h-[95%] rounded-[3px]"></div>
                    <div className="bg-[#636084] w-[1%] h-[97%]"></div>
                    <div className="shadow-Page2 bg-[#666948] w-[47%] h-[95%] rounded-[3px]"></div>
                </section>
            </main>
        </>
    )
}