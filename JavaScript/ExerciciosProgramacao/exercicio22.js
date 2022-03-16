const sortear = (numero) => {
    let numeroSorteado = (Math.random() * 100 / 10).toFixed(0)
    if (numero == numeroSorteado){
        return `Parabéns! O número sorteado foi o ${numeroSorteado}`
    } else {
        return `Que pena! O número sorteado foi o ${numeroSorteado}`
    }
    
}

console.log(sortear(10))
console.log(sortear(5))
