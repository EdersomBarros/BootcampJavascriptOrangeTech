//objeto

/*#region const pessoa = {
    nome: 'Eder',
    idade:40,

    descrever: function() {

        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
        
    }
};

pessoa.descrever();
#endregion*/

class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }






}

   function compararPessoas(p1, p2) {
        if (p1.idade > p2.idade ) {
            console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
        }else if (p2.idade > p1.idade) {
            console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
        } else {
            console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
   } 
}

const pessoa1 = new Pessoa('Edersom', 40);
const pessoa2 = new Pessoa('Antônio Mourão', 35);

compararPessoas(pessoa1, pessoa2);
pessoa1.descrever()