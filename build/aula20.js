"use strict";
class Conta {
    numero;
    titular;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 1000000000) + 1;
    }
    info() {
        console.log(`Número da conta....: ${this.numero}`);
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        this.info();
    }
    info() {
        super.info();
        console.log(`CPF...............: ${this.cpf}`);
        console.log(`Titular...........: ${this.titular}`);
        console.log("---------------------------------");
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        this.info();
    }
    info() {
        super.info();
        console.log(`CNPJ...............: ${this.cnpj}`);
        console.log(`Titular...........: ${this.titular}`);
        console.log("---------------------------------");
    }
}
const conta1 = new ContaPF(123456789, "Rafael");
const conta2 = new ContaPJ(102020, "RafaDev");
conta1.info();
conta2.info();
