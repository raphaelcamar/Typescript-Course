"use strict";
//string
let nome = 'João';
console.log(nome);
//nome = 28
//numbers
let idade = 27;
//idade = 'ana'
idade = 27.5;
console.log(idade);
//Todos os tipos de número (longe, number, etc)
//são considerados de apenas um tipo : Number
//boolean
let possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
//tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = 'idade é 27';
console.log(typeof minhaIdade);
//array
let hobbies = ['Cozinhar', 'Praticar Esporte'];
console.log(hobbies[0]);
console.log(typeof hobbies);
//tuplas
let endereco = ['Av principal', 99];
console.log(endereco);
//enums
var Cor;
(function (Cor) {
    Cor["Cinza"] = "#asdass";
    Cor["Verde"] = "#asd3ds";
    Cor["Azul"] = "";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2029 };
console.log(carro);
//funcoes
function retornaMeuNome() {
    // return minhaIdade
    return nome;
}
function digaOi() {
    console.log('Oi');
}
console.log(retornaMeuNome());
console.log(digaOi());
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 5));
//tipo funcao
//O nome da variável não importa, o que importa são os tipos e a ordem
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
let usuario = {
    nome: 'João',
    idade: 27
};
let funcionario = {
    supervisores: ['Ana', 'Fernando'],
    batePonto(horario) {
        if (horario <= 8) {
            return 'ponto normal';
        }
        else {
            return 'Fora do horario';
        }
    }
};
//union types
let nota = 10;
console.log(`Minha nota é ${nota}`);
nota = '10';
console.log(`Minha nota é ${nota}`);
//Checando tipos
let valor = 30;
if (typeof valor === "number") {
    console.log('É um number!');
}
else {
    console.log(typeof valor);
}
//Tipo never : Quer explicitar que vai retornar um erro ou nunca vai retornar
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
        if (this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco inválido');
        }
    }
};
//retorna ambos os erros
produto.validarProduto();
let altura = 12;
// altura = null;
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '877687',
    tel2: null
};
let podeSerNulo = null; // É do tipo Any
let contaBancaria = {
    saldo: 3245,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Raphael',
    contatos: ['74653464', '546454'],
    contaBancaria: contaBancaria
};
//# sourceMappingURL=tipos.js.map