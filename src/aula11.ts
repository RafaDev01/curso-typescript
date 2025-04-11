// Type assertion -> afirmação de tipo, é quando precisomos dizer ao compilador que um dado é de um tipo específico
// Type Casting -> conversão de tipo, é quando precisamos converter um dado de um tipo para outro tipo

let nvalor: number;
let svalor: string;
let uvalor: unknown;

uvalor = 10;
svalor = "20";

nvalor = Number.parseInt(svalor); // type casting -> conversão de tipo, o valor é convertido para number
console.log(nvalor);

//uvalor = 10;
//svalor = uvalor as string; // type assertion -> afirmação de tipo, o vlaor não é convertido, apenas afirmado, então o valor continua sendo um número
//svalor = '10';

//nvalor = uvalor as number; // type assertion -> afirmação de tipo
//nvalor = <number>uvalor; // type assertion -> afirmação de tipo

//nvalor = svalor as unknown as number; // type assertion -> afirmação de tipo, o valor é convertido para string e depois para number
//nvalor = <number><unknown>svalor; Mesmo que acima, mas com a sintaxe antiga

//onsole.log(svalor);
//console.log(typeof svalor);

//console.log(nvalor);
//console.log(typeof nvalor);

//console.log(uvalor);
//console.log(typeof uvalor);