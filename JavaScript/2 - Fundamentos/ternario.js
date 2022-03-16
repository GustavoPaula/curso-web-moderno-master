const resultado = (nota) => {
    const status = nota >= 7 ? "Aprovetado" : "Reprovado"
    return status
}

console.log(resultado(6))
console.log(resultado(7))
