//parametros rest

function fsoma(...numeros: number[]) {
    let resultado = 0;
    for (let number of numeros) {
        resultado += number;
    }
    return resultado;
}

console.log(fsoma(10, 20, 30, 50, 70, 98, 7000, 100));