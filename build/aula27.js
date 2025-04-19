"use strict";
let curso1 = {
    descricao: "Curso completo de TypeScript",
    aula: 10,
    maxAlunos: 100,
    iniciarCurso(nomeCurso) {
        console.log(`Iniciando o curso ${nomeCurso}`);
    }
};
let cursoProgramacao = {
    descricao: "Curso completo de TypeScript",
    aula: 10,
    maxAlunos: 100,
    linguagem: "TypeScript",
    nivel: "Avançado",
    iniciarCurso(nomeCurso) {
        console.log(`Iniciando o curso ${nomeCurso}`);
    }
};
cursoProgramacao.iniciarCurso("TypeScript");
console.log(cursoProgramacao);
curso1.iniciarCurso("TypeScript");
console.log(curso1);
