function criarPessoa(nome){
    this.nome = nome
    this.falar = function (){
        console.log(`O meu nome é: ${this.nome}`)
    }
}

const p1 = new criarPessoa("Gustavo")
p1.falar()

