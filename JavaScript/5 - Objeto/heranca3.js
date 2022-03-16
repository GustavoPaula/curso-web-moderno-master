const pai = { nome: "Ivo", corCabelo: "Preto" };

const filha1 = Object.create(pai);
filha1.nome = "Gabriela";

console.log(`${filha1.nome} tem cor de cabelo ${filha1.corCabelo}`);

const filha2 = Object.create(pai, {
  nome: { value: "Karen", enumerable: true, writable: false },
});

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let key in filha1) {
  filha1.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`tem como herança ${key}`);
}
