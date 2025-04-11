// Array e Readonly Array

let numeros: number[] = [20, 30, 40];
//const numeros: Array<number | string> = [20, 30, 40, "Rafael"];
//let numeros: (number | string)[] = [20, 30, 40, "Rafael"];

numeros.push(10);
numeros.unshift(50);
numeros.pop();
numeros.shift();

console.log(numeros);

// Array somente leitura
let numero_ro: ReadonlyArray<number> = [20, 30, 40, 1000, 10000];

console.log(numero_ro);