const saudacao = "Opa" // contexto léxico 1

function exec() {
    const saudacao = "Falaaa" // contexto léxico 2
    return saudacao
}
console.log(saudacao)
console.log(exec())

const cliente = {
    nome: "Gustavo",
    idade: 26,
    sexo: "Masculino",
    endereco: {
        rua: "Rua Luiz Spinelli",
        bairro: "Jardim Alvorada",
        numero: 936
    }
}

console.log(cliente)