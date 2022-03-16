function imprimirNota(nota){
    let notaArredondada = arredondarNota(nota)
    if (nota >= 40){
        console.log(`Aluno Aprovado: ${notaArredondada}`)
    } else{
        console.log(`Aluno Reprovado: ${notaArredondada}`)
    }
}

function arredondarNota(nota){
    if(nota % 5 >= 3){
        return Math.ceil(nota/5)*5
    }else{
        return nota
    }
}

imprimirNota(41)