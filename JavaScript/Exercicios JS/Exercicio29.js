const contarNumeros = () => {
    let vetor = [10,13,15,16,18,20,30,40,50]
    let intervalo = 0
    let foraIntervalo = 0
    for(let i in vetor){
        if(vetor[i] >= 10 && vetor[i] <= 20){
            intervalo++
        } else{
            foraIntervalo++
        }
    }
    console.log(`Intervalo: ${intervalo}, Fora do Intervalo ${foraIntervalo}`)
}

contarNumeros()