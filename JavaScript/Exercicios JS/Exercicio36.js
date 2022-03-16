const multiplicarVetor = (vetor, numero) => {
    let novoVetor = []

    for(i in vetor){
        novoVetor.push(vetor[i] * numero)
    }
    console.log(novoVetor)
}

const numeroMaior5 = (vetor, numero) => {
    if(numero > 5){
        let newVetor = []
        for(i in vetor){
            newVetor.push(vetor[i] * numero)
        }
        console.log(newVetor) 
    } else{
        console.log(`Número menor que 5`)
    }
    
} 

multiplicarVetor([2,3,4,5], 5)
numeroMaior5([2,3,4,5], 5)