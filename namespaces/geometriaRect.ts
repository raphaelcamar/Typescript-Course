namespace Geometria{
    //Tudo dentro de um namespace é necessário EXPORTAR para usar.
    export namespace Area{
        const PI = 3.14;
        
        export function Retangulo(base : number, altura : number):number{
            return base * altura;
        }
        
    }
}