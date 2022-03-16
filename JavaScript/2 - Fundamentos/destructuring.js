const pessoa = {
    nome: "Gustavo",
    idade: 26,
    endereco: {
        logradouro: "Rua Luiz Spinelli",
        numero: 936
    }
}

const {nome: n, idade: i} = pessoa
console.log(n, i )

const {endereco:{logradouro, numero}} = pessoa
console.log(logradouro, numero)

/* const {conta:{agencia, num}} = pessoa -- vai dar erro */

const [a] = [10]
console.log(a)

const [n1, , n3, n4, , n6, n7 = 0] = [10, 7, 8, 9]
console.log(n1, n3, n4, n6, n7)

const [, [, nota1], [nota2, ]] = [10, [9, 6], [ 10, 9] ]
console.log(nota1, nota2)

function rand({min = 0, max = 1000}){
    if (min > max) ({min, max} = {max, min})
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const aleatorio = {min: 1000, max: 600}
console.log(rand(aleatorio))
console.log(rand({min: 900}))
