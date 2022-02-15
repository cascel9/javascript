let varA = 'A';
let varB = 'B';
let varC= 'C';

const tempo = varA
varA = varB;
varB = varC;
varC = varA;

console.log(varA, varB, tempo);