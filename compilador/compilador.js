"use strict";
//COMPILAR PARA JS -> tsc <nomeDoArquivo.ts>
//COLOCAR WATCH NO TS -> tsc -w
console.log('adfasdadasddasdas');
let canal = 'Gaveta';
let inscritos = 610234122;
console.log(canal);
//O erro some após a mudança no TSconfig -> "noImplicitAny": false,
//Por padrão o no ImplicityAny é true 
function soma(a, b) {
    return a + b;
}
//any implícito
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom dia';
    }
    else {
        saudacao = 'Boa vida';
    }
    return saudacao;
}
//# sourceMappingURL=compilador.js.map