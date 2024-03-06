export class Animal {
    nome: string;
    idade: number;
    peso: number;

    constructor(nome: string, idade: number, peso: number) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }

    comer(): void {
        console.log(`${this.nome} está comendo.`);
    }

    dormir(): void {
        console.log(`${this.nome} está dormindo.`);
    }
}

export class Cachorro extends Animal {
    latir(): void {
        console.log(`${this.nome} está latindo.`);
    }
}

export class Cavalo extends Animal {
    galopar(): void {
        console.log(`${this.nome} está galopando.`);
    }
}

export class Gato extends Animal {
    miar(): void {
        console.log(`${this.nome} está miando.`);
    }
}
