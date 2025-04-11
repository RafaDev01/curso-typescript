// arrow functions e funções anônimas

// Função anônima -> é utilizado sempre que não se tem a intenção de reutilizar a função
// Utilizado bastante em funções que necessitam de callback
// o callback é uma função que é passada como argumento para outra função
// funções declaradas com function são elevadas
// funções declaradas com arrow function não são elevadas
// arrow function -> é uma função anônima que pode ser atribuída a uma variável


//teste(): void {
//    console.log("Teste")
//}

const teste = (txt?: string): void => {
    console.log(txt)
}

const soma = (n: number[]): number => {
    let resultado = 0;
    n.forEach((elementosDoN) => { resultado += elementosDoN; })
    return resultado;
}

teste("Rafael");
teste("Curso de typescript");
teste("Youtube");
teste();

let numerosSoma: number[] = [10, 20, 30, 40, 50];

console.log(soma(numerosSoma));