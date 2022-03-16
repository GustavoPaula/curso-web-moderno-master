const retornarPAPG = (n, a1, r) => {
    PA(n, a1, r)
    PG(n, a1, r)
}

const PA = (n, a1, r) => {
    for(let i = 1; i < n; i++){
        a1 = a1 + r
    }
    console.log(a1)
}

const PG = (n, a1, r) => {
    for(let x = 1; x < n; x++){
        a1 = a1 * r
    }
    console.log(a1)
}

retornarPAPG(10, 1, 2)