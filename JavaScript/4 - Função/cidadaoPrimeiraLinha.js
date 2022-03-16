// Função em JavaScript é First-Class Object (Citizens)
// Higher-order function

// Criar função de forma literal
function fun1 (){}

// Armazenar uma função em uma variável
const fun2 = function(){}

// Armazenar uma função em um array
const array = [function fun3(a, b){return a + b}, fun1, fun2 ]
console.log(array[0](2,3))

// Armazenar uma função em um atributo de um objeto
const obj = {}
obj.nome = function(){
    return "Gustavo"
}
console.log(obj.nome())

// Passar uma função como parâmetros
function run (fun){
    fun()
}
run(function(){console.log("Ola")})

// Retornar uma função
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
// Ou dessa forma
const resultadoSoma = soma(2, 3)
resultadoSoma(4)