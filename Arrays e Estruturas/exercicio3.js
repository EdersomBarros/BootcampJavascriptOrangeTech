//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['Vilma', 'Henrique', 'Vera', 'Roberto']

for (let i = 0; i < nomes.length; i++) {
    
    if (nomes.map('V')) {
        console.log('nomes= ' + nomes[i]);
    }
    
}