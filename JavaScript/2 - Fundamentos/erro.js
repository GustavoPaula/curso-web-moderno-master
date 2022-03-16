function nomeMaiusculo(nome, tipo) {
    console.log(nome.toUpperCase(), tipo.toUpperCase() + "!!!")
}

const obj = {
    nome: "wallace",
    tipo: "ordinario" }
nomeMaiusculo(obj.nome, obj.tipo)