interface Humano {
    nome: string;
    idade ?: number; // opcionals
    [prop : string] : any //Nome dinâmico
    saudar(sobrenome : string) : void;
}

function saudaComOla(pessoa : Humano):void{
    console.log('Olá' + pessoa.nome)
}

function mudarNome(pessoa : Humano){
    pessoa.nome = 'Joana';
}

const pessoa: Humano = {
    nome : 'João',
    idade : 27,
    saudar(sobrenome : string){
        console.log(`Olá, meu nome é  ${sobrenome}`)
    }
}

saudaComOla(pessoa);
mudarNome(pessoa);
//saudaComOla({nome : 'Jonas', idade : 27, altura : 1.75});

class Cliente implements Humano{
    nome : string = ''
    ultimaCompra : Date = new Date
    saudar(sobrenome : string){
        console.log(`Olá, meu nome é  ${sobrenome}`)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han';
saudaComOla(meuCliente);
meuCliente.saudar('Solo');

console.log(meuCliente.ultimaCompra);


interface FuncaoCalculo{
    (a:number, b : number): number
}

let potencia : FuncaoCalculo;
potencia = function(base : number, exp : number) : number{
    // Math.pow(base, exp);
    //3 ** 10
    return Math.pow(base, exp);
}


//A função funciona, pois passa parâmetros que respeitam os parâmetros da interface
console.log(potencia(3, 10))
console.log(Math.pow(3,10))
console.log(3 ** 10)


interface A {
    a(): void

}
interface B {
    b(): void

}
//A palavra IMPLEMENTS é usada quando possui conexão entre classe e interface
//A palavra EXTENDS é usada quando possui relação entre classe -> classe e interface -> interface
interface ABC extends A, B{
    c():void;
}

class RealA implements A {
    //É necessário definir um corpo para a função
    a():void{}
}

class RealAB implements A,B{
    a():void{};
    b():void {}
}

class RealABC implements ABC {
    a(): void{};
    b(): void{};
    c(): void{};
}

//Aqui, é obrigado a implementar os métodos das interfaces
abstract class AbstractABD implements A, B{
    a(): void{}
    b(): void{}
    abstract d(): void
}

//Resolve o problema de compilação do javascript
interface Object {
    log():void
}

//Criando um objeto para printar na tela, porém, o typescript chama o erro que não reconhece
Object.prototype.log = function(){
    console.log(this.toString())
}

const x = 1;
const y = 2;
const zy = 3;

//Printam na tela
x.log();
y.log();
zy.log();

const cli = {nome : 'Pedro'}

//Funciona com objeto também
cli.log();