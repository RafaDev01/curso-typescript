// Enum - enumeradores - São conjuntos de dados que podemos utilizar e classificar por valores numerais ou textuais

enum diasDaSemana {
    domingo = 0,
    segunda = 1,
    terca = 2,
    quarta = 3,
    quinta = 4,
    sexta = 5,
    sabado = 6
}

//console.log(diasDaSemana.domingo);
//console.log(diasDaSemana[1]);
//console.log(diasDaSemana["domingo"]);

const d = new Date();
//console.log(d.getDate());
//console.log(diasDaSemana[d.getDay()]);

enum cores {
    branco = "#FFFFFF",
    preto = "#000000",
    azul = "#0000FF",
    vermelho = "#FF0000",
    verde = "#00FF00",
}

console.log(cores.branco);
console.log(cores['branco']);

enum tipoUser {
    USER = 10,
    ADMIN = 100,
    SUPERADMIN = 1000
}

console.log(tipoUser[1000]);

const tp: tipoUser = 1000;
const tp2: tipoUser = tipoUser.SUPERADMIN;

console.log(tp2)