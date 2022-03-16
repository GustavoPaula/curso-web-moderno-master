const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao)
    }
}

const falar2 = pessoa.falar.bind(pessoa)
falar2()

function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade ++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa
