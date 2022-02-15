const nome = 'Celso';
const sobrenome = 'Silva';
const idade = 50;
const altura = 1.88;
const peso = 76;
let imc; //peso/(altura*altura);
let nascimento;
imc = peso/(altura*peso);
nascimento = 2022 - idade;

console.log('Me chamo', nome, sobrenome, 'tenho', idade, 'anos e altura', altura, 'peso atualmente:', peso, 'kilos, meu indice de massa é: imc', imc, 'Nasci em:', nascimento);

// uso de templatestrings
console.log(`Me chamo ${nome} ${sobrenome}, tenho ${idade} anos e altura ${altura} peso atualmente: ${peso} kilos meu indice de massa é: ${imc} imc Nasci em: ${nascimento}`);

//Testando ParseInt e parseFloat
const valor1 = parseFloat(20.35);
const valor2 = parseFloat('30.47');
console.log(valor1+valor2);