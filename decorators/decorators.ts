

function logarClasse(construtor : Function){
    console.log(construtor);
}

function decoratorVazio(_: Function){}

function logarClasseSe(valor : boolean){
    return valor ? logarClasse : decoratorVazio;
}

function decorator(a:string, b:number){
    return function( _ : Function):void{
        console.log(a + b)
    }
}

// @logarClasse
// @logarClasseSe(true)
// @decorator('Teste', 2)
class Eletrodomestico {
    constructor(){
        console.log('Novo....');
    }
}

type Constructor = {new(...args:any[]):{}}

function logarObjeto(construtor:Constructor){
    return class extends construtor{
            constructor(...args: any[]){
                console.log('Antes...');
                super(...args);
                console.log('Depois...');
            }
    }
}


// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
 
new MudancaAdministrativa().critico()

function perfilAdmin<T extends Constructor>(construtor: T){
    return class extends construtor{
        constructor(...args : any[]){
            super(...args)
            if(!usuarioLogado || usuarioLogado.admin){
                throw new Error('Sem permissão!')
            }
        }
    }
}

class ContaCorrente{
    @naoNegativo
    private saldo: number

    constructor(saldo : number){
        this.saldo = saldo;
    }

    @congelar
    sacar( @paramInfo valor: number){
        if(valor <= this.saldo){
            this.saldo -= this.saldo
        }else{
            return false;
        }
    }

    @congelar
    getSaldo(){
        return this.saldo;
    }
}

const cc = new ContaCorrente(10248.65);
cc.sacar(5000);
console.log(cc.getSaldo);

// cc.getSaldo = function(){
//     return this['saldo'] + 7000
// }
// console.log(cc.getSaldo());

// Object.freeze()

function congelar(alvo : any, nomePropriedade : string, descritor: PropertyDescriptor){
    console.log(alvo);
    console.log(nomePropriedade);
    descritor.writable = false;
}

function naoNegativo(alvo : any, nomepropriedade : string){

    delete alvo[nomepropriedade]
    Object.defineProperty(alvo, nomepropriedade, {
        get : function(): any{
            return alvo["_" + nomepropriedade]
        },
        set : function(valor: any): void{
            if(valor < 0){
                throw new Error('Saldo inválido!');
            }
        }
    });
}

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number){
    console.log(`Alvo: ${alvo}`);
    console.log(`Método: ${nomeMetodo}`);

}