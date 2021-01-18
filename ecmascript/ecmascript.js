"use strict";
//let e const
var seraQuePode = '?'; //hoisting
console.log(seraQuePode);
//O let não tem issamento (na hora da compilação, o JS joga para cima as declarações em VAR)
let estaFrio = true;
if (estaFrio) {
    var acao = 'Coloar o casaco!';
    console.log(acao);
}
const cpf = '123.456.789-00';
//cpf = '321.654.987-89'
console.log(cpf);
var segredo = 'externo';
function revelar() {
    var segredo = 'interno';
    //VAR POSSUI ESCOPO DE FUNÇÃO, LOGO, NÃO ESTÁ VISIVEL FORA, 
    //E É ÚNICO
    console.log(segredo);
}
revelar();
console.log(segredo);
//Função anônima
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
//Retorno implícito
const subtrair = (n1, n2) => n1 - n2;
const saudacao = () => console.log('olá');
saudacao();
//Independente da quantidade de parâmetros, é necessário colocar os parênteses
const falarCom = (pessoa) => console.log('Olá ', pessoa);
falarCom('Raphael');
//this
function normalComThis() {
    //console.log(this);
}
//O paraêmtro dentro do bind, será o this da função referenciada
//Ou seja, na função normalComThis será 2
const normalComThisEspecial = normalComThis.bind(2);
normalComThis();
normalComThisEspecial();
console.log(this);
//const arrowComThis = () => console.log(this)
//arrowComThis()
//Parâmetros padrão
function contagemRegressiva(inicio = 3, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim');
}
contagemRegressiva();
contagemRegressiva(5);
//Spread Operator e Rest Operator
const numbers = [1, 10, 5, 45, 65, -8];
//O spread Operator, pega todos os elementos do array, e envia um por um
//O Math.max espera receber valores numéricos, e não um array
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);
//Um rest Operator : Está pegando todos os valores recebidos e juntando eles
function retornarArray(a, ...args) {
    console.log(a);
    return args;
}
const numeros = retornarArray(1, 2);
console.log(numeros);
console.log(retornarArray(...numbers));
//REST & Spread
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1)${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
//Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
//Destructuring Objeto
//É válido
const [w, z] = [2, 3];
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: true,
    }
};
//Variável criada com o nome 'N', pegando o valor de nome
const { nome: n, preco } = item;
console.log(n);
function esperar3s(callback) {
    setTimeout(() => {
        callback('3s depois');
    }, 3000);
}
esperar3s(function (resultado) {
    console.log(resultado);
});
function esperar3sPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3S DEPOIS');
        }, 3000);
    });
}
esperar3sPromise().then(dado => console.log(dado));
fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(dados => dados.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(filme));
//# sourceMappingURL=ecmascript.js.map