/*
    3) Elabore um algoritmo que calcule o que 
    deve ser pago por um produto, considerando 
    o preço normal de etiqueta e a escolha da 
    condição de pagamento. 
    Utilize os códigos da tabela a seguir para 
    ler qual a condição de pagamento escolhida 
    e efetuar o cálculo adequado.
    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais 
    juros de 10%;
*/
const preco = 115.03;
const codicoCondicao = 'PIX';

if (codicoCondicao === 'debito') {
    precoDesconto = preco - (preco * 0.1)
    console.log('No débito fica: ' + precoDesconto.toFixed(2));
} else if  (codicoCondicao === 'PIX') {
    precoDesconto = preco - (preco * 0.15)
    console.log('No PIX fica: ' + precoDesconto.toFixed(2));
} else if  (codicoCondicao === 'Em duas vezes') {
    console.log('Em duas vezes: ' + preco.toFixed(2));
} else {
    precoDesconto = preco + (preco * 0.1)
    console.log('Acima de duas vezes, preço normal de etiqueta R$ ' + preco + '  mais juros de 10%, que fica: '
        + precoDesconto.toFixed(2) + '.');
}
