// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0
 
//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }
 
//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }

class Moto{
    public velocidade : number = 0;
    constructor(public nome : string){

    }

    buzinar(){
        console.log('TUUUUUUUU')
    }

    acelerar(delta : number){
        this.velocidade = this.velocidade + delta
    }
}

 
const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)
 
// Exercício 2 - Herança
// var objeto2D = {
//     base: 0,
//     altura: 0
// }

abstract class Objeto2D{
    constructor(public base : number = 0, public altura : number = 0){

    }

    abstract area():number;
}

class Retangulo extends Objeto2D{
    area():number{
        return this.base * this.altura;
    }
}
 
const retangulo = new Retangulo(5, 4)
retangulo.base = 5
retangulo.altura = 7
console.log(retangulo.area())
 
// Exercício 3 - Getters & Setters
class Estagiario {
    private _primeiroNome : string = ''

    get primeiroNome():string{
        return this._primeiroNome
    }

    set primeiroNome(nome : string){
        if (nome.length >= 3) {
            this._primeiroNome = nome
        } else {
            this._primeiroNome = ''
        }
    }
}

const estagiario = new Estagiario()
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)