const trocarElemento = (vetorA, vetorB) => {
    vetorA.push(vetorA[0])
    vetorB.push(vetorB[0])

    delete vetorA[0]
    delete vetorB[0]

    vetorA[0] = vetorB[vetorB.length - 1]
    vetorB[0] = vetorA[vetorA.length - 1]

    vetorA.pop()
    vetorB.pop()

    console.log(`${vetorA}`)
    console.log(`${vetorB}`)
}

trocarElemento([1,2,3,4,5],[6,7,8,9,10])