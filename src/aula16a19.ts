// POO - Classes
// Classes são moldes para criar objetos

//Modificadores de acesso
// public -> padrão, acessível em qualquer lugar
// private -> acessível apenas dentro da classe
// protected -> acessível apenas dentro da classe e em classes filhas
// readonly -> acessível apenas para leitura, não pode ser alterado
// static -> acessível sem instanciar a classe, pertence à classe e não ao objeto
// abstract -> classe abstrata, não pode ser instanciada, serve como molde para outras classes
// final -> classe final, não pode ser herdada

class Computador {
    //parâmetros
    public nome: string;
    private ram: number;
    private cpu: number;
    protected ligado: boolean;

    constructor(nome: string, ram: number, cpu: number) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }

    //métodos
    info(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram} GB`);
        console.log(`CPU: ${this.cpu} GHz`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log("-------------------------");
    }

    ligar(): void {
        this.ligado = true;
        console.log(`${this.nome} ligado!`);
    }

    desligar(): void {
        this.ligado = false;
        console.log(`${this.nome} desligado!`)
    }

    upRam(qtd: number): void {
        if (qtd > 0 && qtd < 1000) {
            console.log("Valor inválido!");
            return;
        }
        this.ram += qtd;
    }
}

// Instanciado/criando um objeto
const computador1 = new Computador("Comp 1", 16, 4);
const computador2 = new Computador("Comp 2", 32, 8);
const computador3 = new Computador("Comp 3", 64, 16);

computador1.nome = "Super pc gamer";
computador1.ligar();
computador3.ligar();

computador1.info();
computador2.info();
computador3.info();