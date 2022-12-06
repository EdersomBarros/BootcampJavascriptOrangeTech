/*2) Crie um programa que seja capaz de percorrer uma lista 
de números e imprima cada número Par encontrado.*/

const numeros = [1,35,365,20,98,5,6,48,182]

for (let i = 0; i < numeros.length; i++) {
  
    if (numeros[i] %5 === 0) {
        console.log('Esse número ' + numeros[i] + ' é Par');
    }
    
}