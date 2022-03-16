function calcularAltura(altura1, altura2, taxaAnual1, taxaAnual2){
    let crianca1 = altura1 * (1 + taxaAnual1/100)
    let crianca2 = altura2 * (1 + taxaAnual2/100)

    console.log(`O crescimento no ano atual:
    Criança 1: ${crianca1} cm
    Criança 2: ${crianca2} cm`)

    if(crianca1 == crianca2){
        console.log(`A altura das crianças são iguais`)
    } else{
        alturaDiferente(crianca1, crianca2, taxaAnual1, taxaAnual2)
    }
}

function alturaDiferente(crianca1, crianca2, taxaAnual1, taxaAnual2){
    let i = 0
    if(crianca1 > crianca2 && taxaAnual2 > taxaAnual1){
        while(crianca2 < crianca1){
            crianca2 = crianca2 * (1 + taxaAnual2/100)
            crianca1 = crianca1 * (1 + taxaAnual1/100)
            i++
        }
        console.log(`A menor criança vai ultrapassar a maior daqui ${i} ano(s) `)
    } else if (crianca2 > crianca1 && taxaAnual1 > taxaAnual2){
        while(crianca2 > crianca1){
            crianca2 = crianca2 * (1 + taxaAnual2/100)
            crianca1 = crianca1 * (1 + taxaAnual1/100)
            i++
        }
        console.log(`A menor criança vai ultrapassar a maior daqui ${i} ano(s) `)
    } else{
        console.log(`A menor criança não irá ultrapassar a maior`)
    }
}

calcularAltura(180, 150, 5, 9)