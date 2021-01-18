namespace Geometria{
    //Tudo dentro de um namespace é necessário EXPORTAR para usar.
    export namespace Area{
        const PI = 3.14;
    
        export function Circ(rario: number){
            return PI * Math.pow(rario, 2);
        }   
    }
}