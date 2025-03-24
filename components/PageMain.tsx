export const Main = () => {
    return (
        <>
            <div className="shadow-Page bg-[#666948] w-[47%] h-[95%] rounded-[3px]">
                <section className="w-full flex flex-col h-auto">
                    <ul className="flex justify-center space-x-2">
                        <li className="flex flex-col ">
                            <input className="w-56 rounded-[3px] bg-transparent border-b-2 border-white" type="text" />
                            <label className="text-white" htmlFor="">Nome do Personagem</label>
                        </li>
                        <li className="flex flex-col">
                            <input className="w-24 rounded-[3px] bg-transparent border-b-2 border-white" type="text" />
                            <label className="text-white" htmlFor="">Tendencia</label>
                        </li>
                        <li className="flex flex-col">
                            <input className="w-56 rounded-[3px] bg-transparent border-b-2 border-white" type="text" />
                            <label className="text-white" htmlFor="">Jogador</label>
                        </li>
                    </ul>
                    <ul className="flex justify-center space-x-2">
                        <li className="flex flex-col">
                            <input className="w-58 rounded-[3px] bg-transparent border-b-2 border-white" type="text" />
                            <label className="text-white" htmlFor="">Classe E Nivel</label>
                        </li>
                        <li className="flex flex-col">
                            <input className="w-32 rounded-[3px] bg-transparent border-b-2 border-white" type="text" />
                            <label className="text-white" htmlFor="">Divindade</label>
                        </li>
                        <li className="flex flex-col">
                            <input className="w-46 rounded-[3px] bg-transparent border-b-2 border-white" type="text" />
                            <label className="text-white" htmlFor="">Terra Natal</label>
                        </li>
                    </ul>
                    <ul className="flex justify-center space-x-2">
                        <li className="flex flex-col ">
                            <input className="w-24 rounded-[3px] bg-transparent border-b-2 border-white" type="text" />
                            <label className="text-white" htmlFor="">Raça</label>
                        </li>
                        <li className="flex flex-col">
                            <input className="w-16 rounded-[3px] bg-transparent border-b-2 border-white" type="text" />
                            <label className="text-white" htmlFor="">Tamanho</label>
                        </li>
                        <li className="flex flex-col">
                            <input className="w-10 rounded-[3px] bg-transparent border-b-2 border-white" type="text" />
                            <label className="text-white" htmlFor="">Sexo</label>
                        </li>
                        <li className="flex flex-col ">
                            <input className="w-10 rounded-[3px] bg-transparent border-b-2 border-white" type="text" />
                            <label className="text-white" htmlFor="">Idade</label>
                        </li>
                        <li className="flex flex-col">
                            <input className="w-12 rounded-[3px] bg-transparent border-b-2 border-white" type="text" />
                            <label className="text-white" htmlFor="">Altura</label>
                        </li>
                        <li className="flex flex-col">
                            <input className="w-10 rounded-[3px] bg-transparent border-b-2 border-white" type="text" />
                            <label className="text-white" htmlFor="">Peso</label>
                        </li>
                        <li className="flex flex-col ">
                            <input className="w-24 rounded-[3px] bg-transparent border-b-2 border-white" type="text" />
                            <label className="text-white" htmlFor="">Cabelo</label>
                        </li>
                        <li className="flex flex-col">
                            <input className="w-20 rounded-[3px] bg-transparent border-b-2 border-white" type="text" />
                            <label className="text-white" htmlFor="">Olhos</label>
                        </li>
                    </ul>
                </section>
            </div>
            <div className="bg-[#636084] w-[1%] h-[97%]"></div>
            <div className="shadow-Page2 bg-[#666948] w-[47%] h-[95%] rounded-[3px]"></div>
        </>
    )
}