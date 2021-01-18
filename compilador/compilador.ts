//COMPILAR PARA JS -> tsc <nomeDoArquivo.ts>
//COLOCAR WATCH NO TS -> tsc -w

console.log('adfasdadasddasdas')

let canal : string = 'Gaveta'
let inscritos: number = 610234122

console.log(canal)

//O erro some após a mudança no TSconfig -> "noImplicitAny": false,
//Por padrão o no ImplicityAny é true 
function soma(a: any, b : any){
    return a + b
}


//any implícito
let qualquerCoisa;
qualquerCoisa = 12
qualquerCoisa = 'abc';

function saudar(isManha : boolean){
    let saudacao : string;

    if(isManha){
        saudacao = 'Bom dia'
    }else{
        saudacao = 'Boa vida'
    }
    return saudacao;
}