const jurosSimples = (capital, taxaJuros, periodo) => {
    let jurosSimples = capital + (capital * (taxaJuros/100) * periodo)
    return jurosSimples
}

const jurosComposto = (capital, taxaJuros, periodo) => {
    let jurosComposto = capital * (1 + (taxaJuros/100))**periodo
    return jurosComposto
}
console.log(jurosSimples(100, 10, 2))
console.log(jurosComposto(100, 10, 2))