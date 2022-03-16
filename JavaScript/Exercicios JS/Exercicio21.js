function planoDeSaude(idade){
    convenio = 100   
    if(idade < 10){
        convenio += 80
        console.log(`Convenio para crinças abaixo de 10 anos: R$${convenio}`)
    } else if(idade >= 10 && idade <= 30){
        convenio += 50
        console.log(`Convenio entre 10 a 30 anos: R$${convenio}`)
    } else if (idade > 30 && idade <= 60){
        convenio += 95
        console.log(`Convenio acima de 30 e até 60 anos: R$${convenio}`)
    } else{
        convenio += 130
        console.log(`Convenio acima de 60 anos: R$${convenio}`)
    }
}

planoDeSaude(30)