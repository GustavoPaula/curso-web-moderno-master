// Armazenando uma função anonima em uma variável
const imprimirSoma = function (a, b) {
    return a + b
}

console.log(imprimirSoma(3, 5))

// Função arrow, uma das diferêncas é diminuir a sintaxe

const soma = (a, b) => {
    console.log(a + b)
}

soma(2, 3)

// Função de retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 4))