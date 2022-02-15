//alert('Com nossa mensagem');
//confirm('tem certeza que deseja fazer isso?')
//prompt('Digite seu nome');

//capturando a informação
//let confirma = confirm('tem certeza que deseja fazer isso?');

let seunome = prompt('Seu Nome:');
let n1 = prompt(' Digite um Numero:');
let n2 = prompt('Digite o 2 numero');

n1 = Number(n1);
n2 = Number(n2);

const resultado = n1+n2;
//console.log(confirma);
alert(`Ola ${seunome} a soma de ${n1} com ${n2} é ${resultado}`);