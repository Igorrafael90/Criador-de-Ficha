import { Cadastrado } from "./interface"


export const RegisterUser = (
    Email: string,
    Emailconf: string,
    Senha: string,
    Senhaconf: string
): Cadastrado | null => {
    if (!Email || !Senha || !Emailconf || !Senhaconf) {
        alert('Preencha todos os campos');
        return null;
    }
    
    if (Email !== Emailconf) {
        alert("Emails não coincidem");
        return null;
    }

    if (Senha !== Senhaconf) {
        alert("Senhas não coincidem");
        return null;
    }

    if (Senha.length !== 8) {
        alert('A senha precisa ter exatamente 8 caracteres');
        return null;
    }

    if (!Email.includes('@')) {
        alert('Email inválido');
        return null;
    }

    const novoUsuario: Cadastrado = {
        email: Email.toLowerCase().trim(),
        password: Senha
    }
    alert('usuario cadastrado')
    return novoUsuario
}
