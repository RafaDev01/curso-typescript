// Herança -> Classe filha herda propriedades e métodos da classe pai
//public -> acessível em qualquer lugar
//private -> acessível apenas dentro da classe
//protected -> acessível apenas dentro da classe e em classes filhas

class Conta {
    protected numero: number;
    protected titular: string;

    constructor(titular: string) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }

    private gerarNumeroConta(): number {
        return Math.floor(Math.random() * 1000000000) + 1;
    }

    protected info(): void {
        console.log(`Número da conta....: ${this.numero}`);
    }
}

class ContaPF extends Conta {
    cpf: number;
    constructor(cpf: number, titular: string) {
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
    cnpj: number;
    constructor(cnpj: number, titular: string) {
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