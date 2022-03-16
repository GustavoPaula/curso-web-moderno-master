function imprimirArea (largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Tamanha da area permitido ${area}m2`)
    } else{
        return area
    }
}

console.log(imprimirArea(2,2))
console.log(imprimirArea(2)) // Passando apenas 1 parâmetros o segundo vai ser underfined
console.log(imprimirArea()) // Passando nenhuma parâmetros os dois undefined
console.log(imprimirArea(2,3,5,6,7,8)) // Passando mais de 1 parâmetro, só vai considerar os 2 primeiros
console.log(imprimirArea(5,5))
