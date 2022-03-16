const arrayComNumeros = array => {
    let newArray = array.filter(e => Number.isInteger(e))
    return newArray
}

console.log(arrayComNumeros([1,2,3,"Gustavo", "Luis pereira", "7"]))