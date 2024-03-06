// 2. Crie a classe Imovel, que possui um endereço e um preço.
// a. crie uma classe Novo, que herda Imovel e possui um adicional no preço. Crie métodos de acesso e impressão deste valor adicional.
// b. crie uma classe Velho, que herda Imovel e possui um desconto no preço. Crie métodos de acesso e impressão para este desconto.

export class Imovel {
    protected _preco: number;
    protected _endereco: string;

    constructor(_preco: number, _endereco: string) {
        this._preco = _preco
        this._endereco = _endereco
    }

    public get endereco(): string {
        return this._endereco;
    }

    public get preco(): number {
        return this._preco; 
    }

    public set endereco(endereco: string) {
        this._endereco = endereco;
    }

    public set preco(preco: number) {
        this._preco = preco;
    }

    public imprimeDetalhes(): void {
        console.log(`Endereço: ${this._endereco}, Preço: R$ ${this._preco}`);
    }
}

export class Novo extends Imovel {
    private _valorAdicional: number;
    constructor(preco: number, endereco: string, _valorAdicional: number) {
        super(preco, endereco)
        this._valorAdicional = _valorAdicional
    }
    public get adicionalPreco(): number {
        return this._valorAdicional;
    }

    public set adicionalPreco(adicionalPreco: number) {
        this._valorAdicional = adicionalPreco;
    }

    public imprimeDetalhes(): void {
        console.log(`Endereço: ${this.endereco}, Preço Novo com Adicional: R$ ${this.preco + this._valorAdicional}`);
    }
}

export class Velho extends Imovel {
    private _valorDesconto: number;
    constructor(preco: number, endereco: string, _valorDesconto: number) {
        super(preco, endereco)
        this._valorDesconto = _valorDesconto
    }
    public get descontoPreco(): number {
        return this._valorDesconto;
    }

    public set descontoPreco(valorDesconto: number) {
        this._valorDesconto = valorDesconto;
    }

    public imprimeDetalhes(): void {
        console.log(`Endereço: ${this.endereco}, Preço Velho com Desconto: R$ ${this.preco - this._valorDesconto}`);
    }
    }
