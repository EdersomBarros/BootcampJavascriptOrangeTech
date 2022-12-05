/*#region function escrevaMeuNome(nome) {
    return 'Meu nome é: ' + nome;
    
}


ehMaiorIdade(19);


function ehMaiorIdade(idade) {
    if (idade >=18) {
        console.log(escrevaMeuNome('Edersom') + ' Você é maior de idade');
    }else{
        console.log(screvaMeuNome('Antônio')+'Você não é maior de idade');
    }
}
/*#endregion


/*
    3) Elabore um algoritmo que calcule o que 
    deve ser pago por um produto, considerando 
    o preço normal de etiqueta e a escolha da 
    condição de pagamento. 
    Utilize os códigos da tabela a seguir para 
    ler qual a condição de pagamento escolhida 
    e efetuar o cálculo adequado.
    Código Condição de pagamento:
    - 1 - À vista Débito, recebe 10% de desconto;
    - 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - 3 - Em duas vezes, preço normal de etiqueta sem juros;
    - 4 - Acima de duas vezes, preço normal de etiqueta mais 
    juros de 10%;
*/
function aplicarDesconto(preco, desconto) {
    return (preco - (preco * (desconto/100)));
   
}
function aplicarJuros(preco, juros) {
    return (preco + (preco * (juros/100)));
    
}
const precoEtiqueta = 100.03;
const codicoCondicao = '4';

if (codicoCondicao === '1') {
    console.log('No débito fica: ' + aplicarDesconto(precoEtiqueta, 10).toFixed(2));
} else if  (codicoCondicao === '2') {
    console.log('No PIX fica: ' + aplicarDesconto(precoEtiqueta, 15).toFixed(2));
} else if  (codicoCondicao === '3') {
    console.log('Em duas vezes, o preço normal de etiqueta sem juros= R$ ' + precoEtiqueta.toFixed(2));
} else {
    
    console.log('Acima de duas vezes, preço normal de etiqueta R$ ' + precoEtiqueta + '  mais juros de 10%, que fica: '
        + aplicarJuros(precoEtiqueta, 10).toFixed(2) + '.');
}
