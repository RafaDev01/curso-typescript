"use strict";
const teste = (txt) => {
    console.log(txt);
};
const soma = (n) => {
    let resultado = 0;
    n.forEach((elementosDoN) => { resultado += elementosDoN; });
    return resultado;
};
teste("Rafael");
teste("Curso de typescript");
teste("Youtube");
teste();
let numerosSoma = [10, 20, 30, 40, 50];
console.log(soma(numerosSoma));
