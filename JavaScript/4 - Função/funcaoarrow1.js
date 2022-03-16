let dobro = (valor) =>{
    return valor * 2
}

dobro = valor => valor * 2 // Retorno implícito
console.log(dobro(4))

function Pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade ++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
