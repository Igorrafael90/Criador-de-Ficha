import Image from "next/image";
import { Background } from "@/components/squareanima";

export default function Home() {
  return (
    <>
      <Background/>
      <h1 className="text-4xl text-center text-white mt-1">FAÇA FICHA</h1>
      <main className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-80 flex justify-between">
          <button className="text-2xl text-white">LOGIN</button>
          <button className="text-2xl text-white">CADASTRO</button>
        </div>
        <div className="bg-[#4B4869] rounded-[8px] w-80 h-96">
         
        </div>
      </main>
    </>
  );
}
