//string
let nome = 'João'
console.log(nome)
//nome = 28

//numbers
let idade = 27
//idade = 'ana'

idade = 27.5
console.log(idade)
//Todos os tipos de número (longe, number, etc)
//são considerados de apenas um tipo : Number


//boolean
let possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies)

//tipos explícitos
let minhaIdade : any
minhaIdade = 27
console.log(typeof minhaIdade)
minhaIdade = 'idade é 27'
console.log(typeof minhaIdade)

//array

let hobbies : any[] = ['Cozinhar', 'Praticar Esporte']
console.log(hobbies[0]);
console.log(typeof hobbies);

//tuplas
let endereco: [string, number]  = ['Av principal', 99]

console.log(endereco)

//enums
enum Cor{
    Cinza = '#asdass',
    Verde = '#asd3ds',
    Azul = '',
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

//any
let carro : any = 'BMW'
console.log(carro)
carro = {marca : 'BMW', ano : 2029}
console.log(carro)

//funcoes

function retornaMeuNome(): string{
    // return minhaIdade
    return nome
}

function digaOi(): void{
    console.log('Oi')
}
console.log(retornaMeuNome())
console.log(digaOi())

function multiplicar(numA : number, numB: number): number{
    return numA * numB
}

console.log(multiplicar(2, 5))


//tipo funcao
//O nome da variável não importa, o que importa são os tipos e a ordem
let calculo : (numeroA : number, numeroB : number)=> number

calculo = multiplicar
console.log(calculo(5, 6))

let usuario = {
    nome : 'João',
    idade : 27
}

let funcionario:{
    supervisores : string[],
    batePonto : (hora : number) => string,
} = {
    supervisores : ['Ana', 'Fernando'],
    batePonto(horario : number) : string{
        if(horario <= 8){
            return 'ponto normal'
        }else{
            return 'Fora do horario'
        }
    }
}

//union types
let nota: number | string = 10
console.log(`Minha nota é ${nota}`);

nota = '10'
console.log(`Minha nota é ${nota}`);

//Checando tipos
let valor = 30

if(typeof valor === "number"){
    console.log('É um number!')
}else{
    console.log(typeof valor)
}

//Tipo never : Quer explicitar que vai retornar um erro ou nunca vai retornar

function falha(msg : string) : never{
    throw new Error(msg)
}

const produto = {
    nome : 'Sabão',
    preco : -1,
    validarProduto(){
        if(this.nome.trim().length == 0){
            falha('Precisa ter um nome')
        }

        if(this.preco <= 0){
            falha('Preco inválido')
        }
    }
}
//retorna ambos os erros
produto.validarProduto();

let altura = 12
// altura = null;

let alturaOpcional : null | number = 12
alturaOpcional = null

type Contato = {
    nome : string,
    tel1 : string
    tel2 : string | null
}

const contato1 : Contato = {
    nome : 'Fulano',
    tel1 : '877687',
    tel2 : null
}

let podeSerNulo = null // É do tipo Any

//DESAFIO

type ContaBancaria = {
    saldo : number
    depositar: (valor : number) => void
}

type Correntista = {
    nome : string,
    contaBancaria : ContaBancaria,
    contatos : [string, string]
}

let contaBancaria : ContaBancaria = {
    saldo : 3245,
    depositar(valor : number){
        this.saldo += valor
    }
}

let correntista : Correntista = {
    nome : 'Raphael',
    contatos : ['74653464', '546454'],
    contaBancaria : contaBancaria
}
