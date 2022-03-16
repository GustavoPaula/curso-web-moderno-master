function range([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const resultado = Math.random() * (max - min) + min
    return Math.floor(resultado)
}

const array = [90, 60]
console.log(range(array))
console.log(range([, 70]))
console.log(range([]))
