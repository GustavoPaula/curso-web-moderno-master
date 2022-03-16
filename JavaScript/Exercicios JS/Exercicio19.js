function retornarPedido(codigo, quantidade){
    let valor
    switch(codigo){
        case 100:
            console.log(`Cachorro Quente, R$${valor = quantidade * 3}`)
        break
        case 200:
            console.log(`Hambúrguer Simples, R$${valor = quantidade * 4}`)
        break
        case 300:
            console.log(`Cheseeburguer, R$${valor = quantidade * 5.5}`)
        break
        case 400:
            console.log(`Bauru, R$${valor = quantidade * 7.5}`)
        break
        case 500:
            console.log(`Refrigerante, R$${valor = quantidade * 3.5}`)
        break
        case 600:
            console.log(`Suco, R$${valor = quantidade * 2.8}`)
        break
        default:
            console.log(`Produto não existente`)
    }
}

retornarPedido(100, 3)