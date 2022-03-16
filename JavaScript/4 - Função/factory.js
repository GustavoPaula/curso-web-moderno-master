function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Notebook", 7000))
console.log(criarProduto("PS5", 3899.99))
console.log(criarProduto("iPhone", 9000))
