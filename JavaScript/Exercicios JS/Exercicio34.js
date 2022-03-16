const compararString = (stringA, stringB) => {
    let lowerStringA = stringA.toLowerCase().split("")
    let lowerStringB = stringB.toLowerCase().split("")

    lowerStringA = lowerStringA.sort().join('')
    lowerStringB = lowerStringB.sort().join('')


    if(lowerStringA == lowerStringB){
        return true
    } else{
        return false
    }
}

console.log(compararString("abc","CbA"))