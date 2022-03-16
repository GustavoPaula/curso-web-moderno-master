// Object extensions
const produto = Object.preventExtensions({
  nome: "Leite",
  preco: 5.0,
  marca: "Parmalat",
});

produto.desconto = 10;
delete produto.marca;
produto.nome = "Chocolate";

//console.log(produto);

// Object.seal
const carro = {
    nome: "Ferrari",
    modelo: "K10"
};

Object.seal(carro)
delete carro.nome;
carro.preco = 1000000
carro.nome = "BMW"

console.log(carro)