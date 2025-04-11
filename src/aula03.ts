class Curso {
    canal = null
    curso = null;

    constructor(canal: any, curso: any) {
        this.canal = canal;
        this.curso = curso;
    }
}

//comentario

let c1 = new Curso("RafaDev01", "TypeScript");

console.log(c1.canal);
console.log(c1.curso);