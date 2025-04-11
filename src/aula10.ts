// NULL, UNDEFINED, UNKNOWN
// Null -> é um tipo de valor vazio/nulo, mas ainda existe um valor definido
// Undefined -> é um tipo de valor que não existe, não foi definido
// Unknown -> é um tipo de valor que não sabemos o que é, mas sabemos que existe

let vsnome: string | null;

//vsnome; -> precisa ter um valor atribuido mesmo que seja null
vsnome = null;

let vsnome2; // tipo any -> valor undefined

let vnome3: unknown; // tipo unknown -> valor undefined

console.log(vsnome2); // undefined
console.log(vsnome);
console.log(vnome3); // undefined

vnome3 = "Rafael Nascimento";
console.log(vnome3); // Rafael Nascimento
vnome3 = 25;
console.log(vnome3); // 25

// let vnumnovo: number = vnome3; -> Não é possivel, o vnome3 tendo um número