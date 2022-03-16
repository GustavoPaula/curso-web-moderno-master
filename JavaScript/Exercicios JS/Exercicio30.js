const percorrerVetor = () => {
    const vetor = [10,9,8,5,15,20,13]
    let maior = vetor[0]
    let menor = vetor[0]

    for(i in vetor){
        if(vetor[i] <= menor){
            menor = vetor[i]
        }else if(vetor[i] > maior){
            maior = vetor[i]
        }
    }
    console.log(`Maior valor: ${maior}, Menor valor ${menor}`)
}

percorrerVetor()