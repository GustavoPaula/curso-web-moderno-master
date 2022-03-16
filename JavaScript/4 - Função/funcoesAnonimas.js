const soma = function(a, b){
    return a + b
}

const resultado = function (x, y, operador = soma){
    console.log(operador(x, y))
}

resultado(3, 4)
resultado(3, 4, function(a,b){
    return a - b
})
resultado(3, 4, (a, b) => a * b)

const pessoa = {
    falar: function(){
        console.log("Falaaaaa")
    }
}

pessoa.falar()