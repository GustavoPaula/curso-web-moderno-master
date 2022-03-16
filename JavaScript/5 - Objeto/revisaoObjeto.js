const pessoa = new Object

pessoa.nome = "Gustavo"
pessoa["idade"] = "26"
pessoa.sexo = "Masculino"

//console.log(pessoa)

delete pessoa["idade"]
delete pessoa.sexo

//console.log(pessoa)

const carro = {
    modelo: "Honda Civic",
    preco: 100000,
    proprietario: {
        nome: "Gustavo",
        idade: 26,
        endereco: {
            logradouro: "Rua Luiz Spinelli",
            numero: 936,
            bairro: "Jardim Alvorada"
        }
    },
    condutores: [{
        nome: "Thiago",
        idade: 17
    },{
        nome: "Gabriela",
        idade: 20
    }],
    calcularValorSeguro: function (){
        //....
    }
}

carro.proprietario.endereco.bairro = "Projeto Cem"
carro["proprietario"]["endereco"]["numero"] = 190
console.log(carro)

delete carro.proprietario.endereco.bairro
delete carro.proprietario.endereco.numero

console.log(carro)