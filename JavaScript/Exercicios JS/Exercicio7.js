const bhaskara = (ax2,bx,c) => {
    let vetor = []
    let delta = (bx**2) - (4 * ax2 * c) 
    if(delta < 0){
        console.log(`Delta negativo ${delta}`)
    } else if(delta > 0 || delta == 0){
        let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
        let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
        vetor = [x1, x2]
        for(let i in vetor){
            console.log(vetor[i])
        }
    }
}

bhaskara(3, -5, 12)
bhaskara(-3, 5, 12)