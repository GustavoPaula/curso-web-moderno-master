function imprimirSoma(){
    let soma = 0
    for (let i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(imprimirSoma(8,7,6))
