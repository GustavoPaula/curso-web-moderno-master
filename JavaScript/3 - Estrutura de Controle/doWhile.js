function retornarValorAleatorio (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = retornarValorAleatorio(-1, 10)
    console.log(`Número aleatório ${opcao}`)
} while (opcao != -1)

console.log("Finalizado !!!")
