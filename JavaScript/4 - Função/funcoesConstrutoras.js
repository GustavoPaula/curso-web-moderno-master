function Carros(velocidadeMaxima = 200, delta = 5){
    let velocidadeAtual = 0

    this.acelerar = function(){
        if(velocidadeAtual + delta < velocidadeMaxima){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

let uno = new Carros
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

let ferrari = new Carros(500, 30)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())