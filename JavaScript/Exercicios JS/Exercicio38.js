const retorneImpar = (inicio = 0, fim = 100) => {
    let auxiliar = inicio
    if(inicio > fim) {
        inicio = fim
        fim = auxiliar
    }
    
    for(let i = inicio; i <= fim; i++){
        if(i % 2 == 1){
            console.log(i)
        }
    }
}

retorneImpar(100,0)