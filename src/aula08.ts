// Tipo Object - é uma estrutura que pode receber qualquer tipo de dado

let dados = {
    nome: "Rafael Nascimento",
    idade: 25,
    status: "Ativo",

    ola: () => { console.log("Olá, tudo bem?") },
    info: (p: string) => { console.log(`Olá ${p}, tudo bem?`) }
}

dados.nome = "Jacinto";
dados.ola()
console.log(typeof dados);
dados.info(dados.nome);

