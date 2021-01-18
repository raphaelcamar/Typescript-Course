class Data{
    //Público por padrão
    dia : number
    public mes : number
    ano : number

    constructor(dia : number = 1, mes : number = 1, ano: number = 1970){
        this.dia = dia;
        this.mes = mes;
        this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // JS permite omitir os "()"
casamento.ano = 2017
console.log(casamento)

//------------------------------------------------//

class DataEsperta{
    //Público por padrão

    constructor(public dia : number = 1, public mes : number = 1, public ano: number = 1970){}
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta // JS permite omitir os "()"
casamentoEsperto.ano = 2017
console.log(casamentoEsperto)

class Produto{

    constructor(public nome : string, public preco : number,public desconto : number = 0){}

    precoComDesconto():number{
        return this.preco * (1- this.desconto)
    }

    public resumo():string{
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`
    }
}
const p1 = new Produto('Caneta', 55);
p1.desconto = 0.06
console.log(p1)

const prod2 = new Produto('Caderno', 5000, 0.15)
console.log(prod2.resumo())

class Carro {
    private velocidadeAtual : number = 0

    constructor(public marca : string, public modelo : string, private velocidadeMaxima : number = 200){
        
    }

    //Protected é visível por Herança
    //Privado apenas na classe
    protected alterarVelocidade(delta : number):number{
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0
        && novaVelocidade <= this.velocidadeMaxima

        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        }else{
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual;
    }

    public acelerar() : number{
        return this.alterarVelocidade(5)
    }

    public frear(): number{
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'Ka', 2005)
console.log()


class Ferrari extends Carro{

    constructor(modelo : string, velocidadeMaxima : number){
        super('Ferrari', modelo, velocidadeMaxima)
    }

    public acelerar() : number{
        return this.alterarVelocidade(20)
    }

    public frear(): number{
        return this.alterarVelocidade(-15)
    }

}

const f40 = new Ferrari('F40', 324)
console.log(f40.marca)
console.log(f40.acelerar())
console.log(f40.frear())



//Getters and setters

class Pessoa {
    private _idade: number = 0

    get idade(): number{
        return this._idade
    }

    set idade(idade : number){
        if(valor >=0 && valor <= 120){
            this._idade = idade
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10;
console.log(pessoa1.idade)

pessoa1.idade = -3

//Atributos e métodos estáticos

class Matematica {
    static PI : number = 3.1416

    static areaCirc(raio : number): number{
        return this.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4))


//Não pode ser instanciada
abstract class Calculo {

    //Colocando em protected, eu consigo acesar nas classes filhas este atributo
    protected resultado: number = 0

    abstract executar(...numeros: number[]): void

    getResultado(): number {
        return this.resultado
    }
}

class Soma extends Calculo {

    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t + a)
    }

}

class Multiplicacao extends Calculo {

    executar(...numeros: number[]): void {
        this.resultado = numeros.reduce((t, a) => t * a)
    }

}

let c1 = new Soma()
c1.executar(2,3,4,5)
console.log(c1.getResultado())

//Posso tipar do tipo calculo, pois ambos tem o mesmo tipo.
let c2 : Calculo = new Soma()
c2.executar(1,2,3,4,5)

c2.executar(2,3,4,5)


class Unico{
    private static instance: Unico = new Unico

    private constructor() {}

    static getInstance(): Unico{
        return Unico.instance
    }

    agora(){
        return new Date
    }
}

// const errado = new Unico()

console.log(Unico.getInstance().agora())



