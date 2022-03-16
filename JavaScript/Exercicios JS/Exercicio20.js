function entregarCedulas(valor){
    let nota100 = retornarNota100(valor)
    let nota50 = retornarNota50(nota100)
    let nota10 = retornarNota10(nota50)
    retornarNota1(nota10)
}

function retornarNota100(valor){
    let qtde100 = 0
    while (valor >= 100){
        valor = valor - 100
        qtde100++
    }
    console.log(`${qtde100} nota(s) de R$100,00`)
    return valor
}

function retornarNota50(valor){
    let qtde50 = 0
    while (valor >= 50){
        valor = valor - 50
        qtde50++
    }
    console.log(`${qtde50} notas(s) de R$50,00`)
    return valor
}

function retornarNota10(valor){
    let qtde10 = 0
    while (valor >= 10) {
        valor = valor - 10
        qtde10++
    }
    console.log(`${qtde10} notas(s) de R$10,00`)
    return valor
}

function retornarNota5(valor){
    let qtde5 = 0
    while (valor >= 5) {
        valor = valor -5
        qtde5++
    }
    console.log(`${qtde5} nota(s) de R$5,00`)
    return valor
}

function retornarNota1(valor){
    let qtde1 = 0
    while (valor >= 1) {
        valor = valor - 1
        qtde1++
    }
    console.log(`${qtde1} notas(s) de R$1,00`)
    return valor
}

entregarCedulas(2)