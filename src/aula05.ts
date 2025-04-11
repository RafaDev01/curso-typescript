// union types - permite adicionar tipos diferentes em uma mesma variável

//let vteste: string | number | boolean;
let vteste: any;

vteste = "Teste";
vteste = 10;
vteste = true;

let cursos: any[] = ["Javascript", "Typescript", "C++", 100, true];
let valores = [10, 200, 2023];

vteste = cursos;

cursos.push("Arduino");
valores.push(500);

console.log(cursos)
console.log(valores)
console.log(vteste)