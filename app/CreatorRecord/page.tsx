"use client"

import { useState } from "react";
import { Background } from "@/components/squareanima";
import { Main } from "@/components/PageMain";
import { Inv } from "@/components/PageInv";
import { Skill } from "@/components/PageSkill";

export default function CreatorRecord() {
    const [Mode, setMode] = useState<'Main' | 'Inv' | 'Skill'>('Main')
    return (
        <>
            <Background />
            <h1 className="text-4xl text-center text-white mt-1">FAÇA FICHA</h1>
            <main className="w-full h-full flex flex-col items-center justify-center">
                <div className="w-5/6 flex mb-3 space-x-1">
                    <button onClick={() => setMode('Main')} className={`text-xl text-white hover:bg-[#E1604F] rounded-[3px] w-[15%] ${Mode === 'Main' ? 'CircleMIS' : ''}`}>Main</button>
                    <button onClick={() => setMode('Skill')} className={`text-xl text-white hover:bg-[#E1604F] rounded-[3px] w-[15%] ${Mode === 'Skill' ? 'CircleMIS' : ''}`}>Skills</button>
                    <button onClick={() => setMode('Inv')} className={`text-xl text-white hover:bg-[#E1604F] rounded-[3px] w-[15%] ${Mode === 'Inv' ? 'CircleMIS' : ''}`}>Inventory</button>
                </div>
                <section className="flex justify-center items-center bg-[#4B4869] w-5/6 h-3/4 rounded-[3px] space-x-2">
                    {Mode === 'Main' ? (
                        <Main />
                    ) : Mode === 'Skill' ? (
                        <Skill />
                    ) : (
                        <Inv />
                    )}
                </section>
            </main>
        </>
    )
}