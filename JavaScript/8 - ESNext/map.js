const tecnologias = new Map();
tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

console.log(tecnologias.get("react"));
console.log(tecnologias.get("angular").framework);

const chavesVariadas = new Map([
  [function () {}, "Função"],
  [{}, "Objeto"],
  [123, "Numeros"],
]);

chavesVariadas.forEach((value, key) => {
  console.log(key, value)
});

console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

chavesVariadas.set(123, "a");
chavesVariadas.set(123, "b");
console.log(chavesVariadas.get(123));
