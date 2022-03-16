console.log(Math.ceil(5.7))

const obj1 = {}
obj1.nome = "Gustavo"

console.log(obj1.nome)

function Obj(nome, idade){
    this.nome = nome
    this.idade = idade
}
const instObj2 = new Obj("Wallace", 26)
const instObj3 = new Obj("Gustavo", 26)
const instObj4 = new Obj("Marcos", 25)
console.log(instObj2.nome, instObj2.idade)
console.log(instObj3.nome, instObj3.idade)
console.log(instObj4.nome, instObj4.idade)
