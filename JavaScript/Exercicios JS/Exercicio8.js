function converteParaNumeros(){
    let numeros = []
    for (i in arguments){
        numeros[i] = parseInt(arguments[i])
    }
    return numeros
}

function pegaRecorde(numeros){
    let maior = numeros[0]
    let recorde = 0
    for(let i in numeros){
        if(numeros[i] > maior){
            maior = numeros[i]
            recorde ++
        }
    }
    return recorde
}

function pegaPiorJogo(numeros){
    let menor = numeros[0]
    let piorJogo = 0
    for(let i in numeros){
        if(numeros[i] <= menor){
            menor = numeros[i]
            piorJogo = i
        }
    }
    piorJogo ++
    return piorJogo
}

function imprimirRecordeEPiorJogo(){
    let numeros = converteParaNumeros('10','5','9','8','18')
    let recorde = pegaRecorde(numeros)
    let piorJogo = pegaPiorJogo(numeros)
    
    console.log(recorde, piorJogo)
}

imprimirRecordeEPiorJogo()