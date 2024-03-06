// 1. Crie uma classe abstrata chamada Ingresso que possui um valor em reais e um método imprimeValor()
// a. crie uma classe Normal, que herda Ingresso.
// b. crie uma classe VIP, que herda Ingresso e possui um valor adicional. Altere o método imprimeValor para mostrar o valor do ingresso somado com o adicional.
// c. crie uma classe Camarote, que herda ingresso e possui um valor adicional. Altere o método imprimeValor para mostrar o valor do ingresso somado com o adicional.

export abstract class Ingresso {
    protected valor: number;
    constructor(valor: number) {
        this.valor = valor
    }
}

export class Normal extends Ingresso {
    constructor(valor: number) {
        super(valor)
    }
    imprimeValor(): void {
        console.log(`Valor do ingresso Normal: R$ ${this.valor}`);
    }
}

export class Vip extends Ingresso {
    private valorAdicionalVip: number;
    constructor(valor: number, valorAdicionalVip: number) {
        super(valor)
        this.valorAdicionalVip = valorAdicionalVip
    }
    imprimeValor(): void {
        console.log(`Valor do ingresso VIP: R$ ${this.valor + this.valorAdicionalVip}`);
    }
}

export class Camarote extends Ingresso {
    private valorAdicionalCamarote: number;
    constructor(valor: number, valorAdicionalCamarote: number) {
        super(valor)
        this.valorAdicionalCamarote = valorAdicionalCamarote
    }
    imprimeValor(): void {
        console.log(`Valor do ingresso Camarote: R$ ${this.valor + this.valorAdicionalCamarote}`);
    }
}