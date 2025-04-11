// Funções

function logar(user: string, password: string): void {
    console.log(`User......: ${user}`);
    console.log(`Password..: ${password}`);
}

logar("rafael", "123456");
logar("teste", "000");

function somar(n1: number, n2: number): number {
    let resultado: number = n1 + n2;
    return resultado;
}

let resultado: number = somar(15, 20);
let string_resultado: string = somar(50, 50).toString();

console.log(`Resultado: ${resultado}`);
console.log(`Resultado: ${string_resultado}`);