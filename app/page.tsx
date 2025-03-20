'use client'

import Image from "next/image";
import { Background } from "@/components/squareanima";
import { Loginbutton, Registerbutton, RegisterUser } from "@/utils/function";
import { useState } from "react";
import { Cadastrado } from "@/utils/interface";

export default function Home() {
  const [Mode, setMode] = useState(true)
  const [Email, setEmail] = useState('')
  const [Senha, setSenha] = useState('')
  const [Emailconf, setEmailconf] = useState('')
  const [Senhaconf, setSenhaconf] = useState('')
  const [Cadastro, setCadastro] = useState<Cadastrado[]>([])

  return (
    <>
      <Background/>
      <h1 className="text-4xl text-center text-white mt-1">FAÇA FICHA</h1>
      <main className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-72 flex justify-between mb-3">
          <button onClick={() => Loginbutton(setMode)} className={`text-2xl text-white hover:bg-[#E1604F] rounded-[3px] w-[35%]  ${Mode == true ? 'CircleLR' : ''}`}>LOGIN</button>
          <button onClick={() => Registerbutton(setMode)} className={`text-2xl text-white hover:bg-[#E1604F] rounded-[3px] w-[35%] ${Mode == true ? '' : 'CircleLR'}`}>CADASTRO</button>
        </div>
        <div className={`bg-[#4B4869] rounded-[8px] w-72 h-96 ${Mode == true ? 'max-h-64' : ''}`}>
          {Mode == true ?(
            <form className="flex flex-col w-full h-full mt-4 ml-7" action="">
              <label className="block text-white mb-2">Email</label>
              <input className="w-4/5 h-8 rounded-[3px] bg-[#EFEDED] mb-5" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" type="email" />
              <label className="block text-white mb-2">Senha</label>
              <input className="w-4/5 h-8 rounded-[3px] bg-[#EFEDED]" value={Senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" type="password" />
              <button className="bg-[#E1604F] w-26 rounded-[3px] text-white mx-16 mt-2">LOGAR</button>
            </form>
          ) : (
            <form className="flex flex-col w-full h-full mt-4 ml-7" action="">
              <label className="block text-white mb-2">Email</label>
              <input className="w-4/5 h-8 rounded-[3px] bg-[#EFEDED] mb-5" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite um email" type="email" required/>
              <label className="block text-white mb-2">Confirme Email</label>
              <input className="w-4/5 h-8 rounded-[3px] bg-[#EFEDED] mb-5" value={Emailconf} onChange={(e) => setEmailconf(e.target.value)} placeholder="Confirme o email" type="email" required/>
              <label className="block text-white mb-2">Senha</label>
              <input className="w-4/5 h-8 rounded-[3px] bg-[#EFEDED] mb-5" value={Senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite uma senha" type="password" required/>
              <label className="block text-white mb-2">Confirme Senha</label>
              <input className="w-4/5 h-8 rounded-[3px] bg-[#EFEDED]" value={Senhaconf} onChange={(e) => setSenhaconf(e.target.value)} placeholder="Confirme a senha" type="password" required/>
              <button onClick={(e) => {e.preventDefault();/*Evita recarregamento da página*/ RegisterUser(Email,Emailconf,Senha,Senhaconf)}} className="bg-[#E1604F] w-26 rounded-[3px] text-white mx-16 mt-2">CADASTRAR</button>
            </form>
          )}
        </div>
      </main>
    </>
  );
}
