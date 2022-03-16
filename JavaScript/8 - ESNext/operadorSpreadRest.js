// Operador Rest juntar os valores em uma estrutura (array) / Spread espalha
// User spread com objeto
const funcionario = { nome: "Gustavo", salario: 4000 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

// User spread com array
const grupoA = ["João", "Maria", "Rafael", "Marcos"];
const grupoB = ["Gustavo", "Karen", ...grupoA];
//console.log(grupoB);
