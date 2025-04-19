//Objeto literal
interface curso {
    titulo?: string,
    descricao?: string,
    aula?: number,
    maxAlunos?: number,
    iniciarCurso: (nomeCurso: string) => void
}

let curso1: curso = {
    descricao: "Curso completo de TypeScript",
    aula: 10,
    maxAlunos: 100,


    iniciarCurso(nomeCurso: string) {
        console.log(`Iniciando o curso ${nomeCurso}`);
    }
}

interface cursoProgramacao extends curso {
    linguagem: string,
    nivel: string
}

let cursoProgramacao: cursoProgramacao = {
    descricao: "Curso completo de TypeScript",
    aula: 10,
    maxAlunos: 100,
    linguagem: "TypeScript",
    nivel: "Avançado",
    iniciarCurso(nomeCurso: string) {
        console.log(`Iniciando o curso ${nomeCurso}`);
    }
}

cursoProgramacao.iniciarCurso("TypeScript");
console.log(cursoProgramacao);

curso1.iniciarCurso("TypeScript");


console.log(curso1);