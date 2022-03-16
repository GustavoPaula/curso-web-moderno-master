// Criando um Objeto e transformando em um JSON.
const obj = {a:1, b:2, c:3, soma(){ return a + b + c}};
console.log(JSON.stringify(obj))

// Criando um JSON e transformando em um Objeto.
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))