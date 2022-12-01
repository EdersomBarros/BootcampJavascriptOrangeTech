
/*function quadrado(valor) {
    return valor * valor;
}

const quadradodeDez = quadrado(15);
console.log(quadradodeDez);
console.log(quadrado(10) + quadrado(15));*/

function invrementarJuros(valor, percentualJuros) {
    const valorAcrecimo = (percentualJuros/100) * valor;
    return valor + valorAcrecimo;
}
console.log(invrementarJuros(100,10));
console.log(invrementarJuros(95,16));
console.log(invrementarJuros(30,5));