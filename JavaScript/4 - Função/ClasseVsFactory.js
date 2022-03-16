// Classe
class Pessoa{
    constructor(nome){
        this.nome = nome
        
        this.falar = function (){
            console.log(`O meu nome é: ${this.nome}`)
        }
    }
}

const p1 = new Pessoa("Gustavo")
p1.falar()

// Função Factory

const criarPessoa = function(nome){
    return {
        falar: () => {
            console.log(`O meu nome é: ${nome}`)
        }
    }
}

const p2 = criarPessoa("Gustavo")
p2.falar()