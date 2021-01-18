function echo(objeto : any){
    return objeto
}

console.log(echo('João'));
console.log(echo(27));
console.log(echo({nome : 'João', idade : 27}));


//Usando generics
function echoMelhorado<T>(objeto : T): T{
    return objeto
}

console.log(echoMelhorado<string>('João'));
console.log(echoMelhorado<number>(27));
console.log(echoMelhorado<Object>({nome : 'João', idade : 27}));

//Generices disponiveis na API

const avaliacoes : Array<number> = [10,9.3, 7.7]
avaliacoes.push(8.4);
avaliacoes.push(10); 

//Dá erro
// avaliacoes.push('5.5');

function imprimir<T>(args : T[]){
    args.forEach(el => console.log(el))
}

imprimir([1,2,3]);
imprimir<string>(['1','2','3']);
imprimir<{nome:string, idade:number}>([
    {nome : 'Fulano', idade : 22},
    {nome : 'Ciclano', idade : 234}
])

//classes com generics
abstract class OperacaoBinaria<T, R>{
    constructor(public operando1 : T,
        public operando2 : T){}

        abstract executar():R
}

class SomaBinaria extends OperacaoBinaria<number, number>{
    executar():number{
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(3, 4).executar());

class DiferencaEntreDatas extends OperacaoBinaria<Data, string>{
    getTime(data : Data):number{
        let { dia, mes, ano } = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar():string{
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 -t2);
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia)} dia(s)`
    }
}

const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
console.log(new DiferencaEntreDatas(d1, d2).executar())

class Fila<T>{
    private fila : Array<T>

    constructor(...args : T[]){
        this.fila = args
    }

    entrar(elemento : T){
        this.fila.push(elemento)
    }

    proximo(): T |  null{
        if(this.fila.length >=0){
            const primeiro = this.fila[0]
            this.fila.splice(0, 1);
            return primeiro;
        }
        else{
            return null;
        }
    }

    imprimir(){
        console.log(this.fila)
    }
    
}

const fila = new Fila<number>(1.2,2,12,3,2,23,23,4,)

fila.imprimir();
fila.entrar(343);
fila.proximo();

type Par<C, V> = {chave : C, valor : V}

class Mapa<C, V>{
    itens : Array<Par<C, V>> = new Array<Par<C, V>>()

    colocar(par : Par<C, V>):void{
        const encontrado = this.obter(par.chave);
        if(encontrado){
            encontrado.valor = par.valor;
        }else{
            this.itens.push(par);
        }
    }

    obter(chave : C): Par<C,V> | null{
        const resultado = this.itens.filter(i => i.chave === chave)
        return resultado ? resultado[0] : null
    }

    limpar(){
        this.itens = new Array<Par<C, V>>()
    }
}