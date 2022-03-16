function retornarConceito (vetor) {
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] >= 0.0 && vetor[i]<= 4.9){
            console.log("Conceito D")
        } else if(vetor[i] >= 5.0 && vetor[i] <= 6.9){
            console.log("Conceito C")
        } else if(vetor[i] >= 7.0 && vetor[i] <= 8.9){
            console.log("Conceito B")
        } else{
            console.log("Conceito A")
        }
    } 
}

retornarConceito([4.9, 6.9, 8.9, 10])