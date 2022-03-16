function retornarPrimeiroEUltimoElemento (...params) {
    let array = params
    return `${array[0]}, ${array[array.length - 1]}`
}

console.log(retornarPrimeiroEUltimoElemento(1,2,3,4,10))
