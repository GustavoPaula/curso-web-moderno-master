function carros(carro){
    switch(carro){
        case "hatch":
            console.log("Compra efetuada com sucesso")
        break
        case "sedan":
            console.log("Tem certeza que deseja comprar esse modelo ?")
        break
        case "caminhote":
            console.log("Tem certeza que deseja comprar esse modelo ?")
        break
        case "motocicleta":
            console.log("Tem certeza que deseja comprar esse modelo ?")
        break
        default:
            console.log("Não trabalhamos com esse tipo de automóvel aqui")
    }
}

carros("sedan")