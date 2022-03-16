function retornarValorAleatorio (min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
    opcao = retornarValorAleatorio(-1, 10)
    console.log(opcao)
}
console.log("Até a próxima !!!")
