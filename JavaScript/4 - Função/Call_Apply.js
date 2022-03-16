function getPreco (imposto = 0, moeda = "R$"){
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: "PS5",
    preco: 3899.99,
    desconto: 0.17,
    getPreco
}

console.log(produto.getPreco())
console.log(getPreco.call(produto, 0.10, "$"))
console.log(getPreco.apply(produto,[0.10, "$"]))
