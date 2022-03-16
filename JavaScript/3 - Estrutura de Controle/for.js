for (i = 0; i <= 10; i ++){
    console.log(`Valor de i = ${i}`)
}
console.log("Terminou o FOR !!!")

const valor = [5.5, 7.8, 9.8, 5.4, 10]

for(let i = 0; i < valor.length; i++){
    console.log(`Valor = ${valor[i]}` )
}
console.log("Pra finalizar ")

const valor = [5.5, 7.8, 9.8, 5.4, 10]

for (let indice in valor){
    console.log(`${indice}) Valor = ${valor[indice]}`)
}

const pessoa = {
    nome: "Gustavo",
    sobrenome: "Paula",
    idade: 26,
    peso: 85
}

for (let atributo in pessoa){
    console.log(`${atributo}: ${pessoa[atributo]}`)
}
