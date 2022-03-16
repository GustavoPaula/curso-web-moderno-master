// pessoa -> 123 -> {...}
const pessoa = { nome: "Gustavo" };
pessoa.nome = "Karen";
console.log(pessoa);

// pessoa -> 456 -> {...}
pessoa = {nome: "Wallace"}

Object.freeze(pessoa);
pessoa.nome = "Gustavo";
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: "Gustavo" });
console.log(pessoaConstante);
