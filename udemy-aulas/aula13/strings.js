let umaString = "Um \"texto\"";
//                01234567
let outraString ="Um Texto de teste da temperatura";
console.log(umaString);

//informando o índice, exibe a letra na posição [4]
console.log(outraString[4]);

//indexOf
console.log(outraString.indexOf('Texto'));

//match colocando g
console.log(outraString.match(/[a-z]/g));

//match removendo g
console.log(outraString.match(/[a-z]/));

//search - indica o indice onde esta o x
console.log(outraString.search(/[a-z]/));
console.log(outraString.search(/x/));


//replace - indica o indice onde esta o x
console.log(outraString.replace('Um', 'Celso'));
//replace - altera o primeiro "m" por algo desejado
console.log(outraString.replace(/m/, 'x'));
//replace - altera todos "t" por algo desejado (Colocando g)
console.log(outraString.replace(/t/g, 'x'));

//Tamanho da string em Caracteres
console.log(outraString.length);

//Pegando parte do texto Inicio , fim
console.log(outraString.slice(3, 8));
//Pegando do fim para o começo
console.log(outraString.slice(-11));
//Pegando do fim para o começo, MAS começando 4 letras após
console.log(outraString.slice(-11, -4));

//separando por palavras baseado no Espaço
console.log(outraString.split(' '));
//separando por palavras baseado em uma letra
console.log(outraString.split('t'));
//separando por palavras baseado em uma letra e com apenas 3 resultados
console.log(outraString.split('t', 3));

//Tudo maiuscula
console.log(outraString.toUpperCase());
//Tudo minuscula
console.log(outraString.toLowerCase());