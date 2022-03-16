const contarNegativo = () => {
    let vetor = [-1, -2, -3, 0, -10, 6, -9]
    let qtdeNegativo = 0

    for(i in vetor){
        if(vetor[i] < 0){
            qtdeNegativo++
        }
    }
    
    console.log(`Negativo: ${qtdeNegativo}`)
}

contarNegativo()