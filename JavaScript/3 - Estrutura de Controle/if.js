function boaNoticia(nota){
    if (nota >= 7){
        console.log("Aprovado, a sua nota é " + nota)
    }
}

boaNoticia(7)
boaNoticia(6)

function seForVerdade (valor){
    if (valor){
        console.log("É verdade..." + valor)
    }
}

seForVerdade(1)
seForVerdade(0)