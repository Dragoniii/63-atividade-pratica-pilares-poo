// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional no preço. Crie métodos de acesso e impressão deste valor adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto no preço. Crie métodos de acesso e impressão para este desconto.

export class Imovel {
    protected preco: number;
    protected endereco: string;

    constructor(preco: number, endereco: string) {
        this.preco = preco
        this.endereco = endereco
    }

    public getEndereco(): string {
        return this.endereco;
    }

    public getPreco(): number {
        return this.preco;
    }

    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }

    public imprimeDetalhes(): void {
        console.log(`Endereço: ${this.endereco}, Preço: R$ ${this.preco}`);
    }
}


export class Novo extends Imovel {
    private valorAdicional: number;
    constructor(preco: number, endereco: string, valorAdicional: number) {
        super(preco, endereco)
        this.valorAdicional = valorAdicional
    }
    public getAdicionalPreco(): number {
        return this.valorAdicional;
    }

    public setAdicionalPreco(adicionalPreco: number): void {
        this.valorAdicional = adicionalPreco;
    }

    public imprimeDetalhes(): void {
        console.log(`Endereço: ${this.endereco}, Preço Novo com Adicional: R$ ${this.preco + this.valorAdicional}`);
    }
}


export class Velho extends Imovel {
    private valorDesconto: number;
    constructor(preco: number, endereco: string, valorDesconto: number) {
        super(preco, endereco)
        this.valorDesconto = valorDesconto
    }
    public getDescontoPreco(): number {
        return this.valorDesconto;
    }

    public setDescontoPreco(valorDesconto: number): void {
        this.valorDesconto = valorDesconto;
    }

    public imprimeDetalhes(): void {
        console.log(`Endereço: ${this.endereco}, Preço Velho com Desconto: R$ ${this.preco - this.valorDesconto}`);
    }
    }
