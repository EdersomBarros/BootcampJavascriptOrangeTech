
const { gets, print } = require('./funcoesAuxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
    
}
let maiorValor = 0;
 
for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado;
    }
    
}
print(maiorValor)


/**
 * uMA SALA CONTÉM 5 ALUNOS E PARA CADA ALUNO FOI
 * sorteado um número de 1 -100.
 * Faça um programa que receba os 5 números 
 * sorteados para os alunos e mostre o maior 
 * número sorteado.
 * 
 * Dados de entrada:
 * 5
 * 50
 * 10
 * 98
 * 23
 * Saída:
 * 98
 */


