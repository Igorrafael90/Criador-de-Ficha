export const Loginbutton = (
    setMode: React.Dispatch<React.SetStateAction<boolean>>
) => {
    setMode(true)
}

export const Registerbutton = (
    setMode: React.Dispatch<React.SetStateAction<boolean>>
) => {
    setMode(false)
}

export const RegisterUser = (
    Email: string,
    Emailconf: string,
    Senha: string,
    Senhaconf: string
) => {
    if(Email != Emailconf || Senha != Senhaconf){
        window.alert("Email ou Senha estão diferentes dos confirmados")
    }
}
