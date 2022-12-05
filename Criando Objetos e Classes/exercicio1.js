/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto 
médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros 
e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/
class Carro{
    nome;
    marca;
    cor;
    gastoMedioPorKm;
    
    constructor(nome,marca,cor,gastoMedioPorKm){
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
         calcularGasto(distanciaKM, precoCombustivel) {
            return distanciaKM * this.gastoMedioPorKm * precoCombustivel;
    }

}


const carro1 = new Carro('Uno', 'Fiat','Prata', 1/12.5);
console.log(carro1);
console.log(carro1.calcularGasto(70,5).toFixed(2));

const carro2 = new Carro('Palio', 'Fiat', 'Vermelho', 1/9.5)
console.log(carro2);
console.log(carro1.calcularGasto(150,5).toFixed(2));