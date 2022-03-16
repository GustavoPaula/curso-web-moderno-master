const calcularMedia = () => {
    let vetor = [8,10,10]
    let soma = 0
    let qtde = 0

    for(let i in vetor){
        soma += vetor[i]
        qtde++
    }

    let media = soma/qtde
    console.log(media)
}

calcularMedia()