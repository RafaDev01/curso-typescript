"use strict";
function somar_dois(n1 = 10, n2 = 0) {
    return n1 + n2;
}
console.log(somar_dois(undefined, 5));
function novoUser(user, pass, nome) {
    let dados = {
        user: user,
        pass: pass,
        nome: nome
    };
    console.log(dados);
}
novoUser("rafael", "123456");
