"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram} GB`);
        console.log(`CPU: ${this.cpu} GHz`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log("-------------------------");
    }
    ligar() {
        this.ligado = true;
        console.log(`${this.nome} ligado!`);
    }
    desligar() {
        this.ligado = false;
        console.log(`${this.nome} desligado!`);
    }
    upRam(qtd) {
        if (qtd > 0 && qtd < 1000) {
            console.log("Valor inválido!");
            return;
        }
        this.ram += qtd;
    }
}
const computador1 = new Computador("Comp 1", 16, 4);
const computador2 = new Computador("Comp 2", 32, 8);
const computador3 = new Computador("Comp 3", 64, 16);
computador1.nome = "Super pc gamer";
computador1.ligar();
computador3.ligar();
computador1.info();
computador2.info();
computador3.info();
