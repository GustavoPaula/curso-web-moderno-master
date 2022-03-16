function novoSalario(plano, salario){
    switch(plano){
        case "A":
            console.log(salario*1.1)
        break
        case "B":
            console.log(salario*1.15)
        break
        case "C":
            console.log(salario*1.2)
        break
        default:
            console.log("Plano inválido")
    }
}

novoSalario("C", 2000)