const fabricantes = ["Mercedes", "Lamborghini", "Ferrari", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice+1}) ${nome}`)
}

fabricantes.forEach(imprimir)
 fabricantes.forEach(function (fabricante){
    console.log(fabricante)
})

fabricantes.forEach((valor, indice)=> console.log((indice+1), valor))