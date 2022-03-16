const removerPropriedadeObjeto = (obj, propriedadeObj) => {
    delete obj[propriedadeObj]
    return obj
}

console.log(removerPropriedadeObjeto({cod: 1, nome: "Gustavo", idade: 26}, "cod"))