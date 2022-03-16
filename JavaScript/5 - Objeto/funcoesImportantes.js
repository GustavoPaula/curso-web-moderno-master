const pessoa = {
  nome: "Gustavo",
  idade: 25,
  peso: 85,
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "12/09/1995",
});

pessoa.dataNascimento = "08/11/2021";

console.log(pessoa.dataNascimento);

const destino = { a: 1 };
const obj1 = { b: 2 };
const obj2 = { c: 3, a: 4 };

Object.assign(destino, obj1, obj2);

console.log(destino);

Object.freeze(destino);
destino.a = 1234;

console.log(destino);
