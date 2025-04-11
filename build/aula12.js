"use strict";
function logar(user, password) {
    console.log(`User......: ${user}`);
    console.log(`Password..: ${password}`);
}
logar("rafael", "123456");
logar("teste", "000");
function somar(n1, n2) {
    let resultado = n1 + n2;
    return resultado;
}
let resultado = somar(15, 20);
let string_resultado = somar(50, 50).toString();
console.log(`Resultado: ${resultado}`);
console.log(`Resultado: ${string_resultado}`);
