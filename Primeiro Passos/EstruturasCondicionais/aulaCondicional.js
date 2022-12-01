/*const numero = 0;



if (numero === 0) {
    console.log('O número é inválido')
}else if(isNumeroDivisivelPor5 = (numero % 5) === 0){
    console.log('O número ' + numero + ' é divisível por 5');
}else{
    console.log('Não');
}*/

// DESAFIO

/*Faça um programa para calcular o valor 
 *gasto de combustível em uma viagem.*/

const precoEtanol = 3.49;
const precoGasolina = 4.79
const km = 150;
const gastoMedioLitro = 12.5;
const tipoCombustivel = 'E tanol';

const litrosConsumidos = km / gastoMedioLitro;


if (tipoCombustivel === 'Etanol') {
    const calculoCombustivel = litrosConsumidos * precoEtanol;
    console.log("Preço do Etanol R$ " + calculoCombustivel.toFixed(2));
} else {
    const calculoCombustivel = litrosConsumidos * precoGasolina;
    console.log("Preço da Gasolina R$ " + calculoCombustivel.toFixed(2));
}
