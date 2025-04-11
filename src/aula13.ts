function somar_dois(n1: number = 10, n2: number = 0): number {
    return n1 + n2;
}

console.log(somar_dois(undefined, 5));

function novoUser(user: string, pass: string, nome?: string): void {
    let dados = {
        user: user,
        pass: pass,
        nome: nome
    }

    console.log(dados)
}

novoUser("rafael", "123456");