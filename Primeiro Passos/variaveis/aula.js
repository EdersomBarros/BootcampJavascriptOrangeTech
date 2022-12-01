
//variaveis
// Faça um programa para calcular o valor gasto de combustível em uma viagem.

const precoCombustivel = 4.79;
const km = 1500;
const gastoMedioLitro = 12.5;

const litrosConsumidos = km / gastoMedioLitro;
const calculoCombustivel = litrosConsumidos * precoCombustivel;

console.log("R$ " + calculoCombustivel.toFixed(2));