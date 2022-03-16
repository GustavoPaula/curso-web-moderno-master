function compras (trabalho1, trabalho2){
    if (trabalho1 && trabalho2 == true){
        console.log("Comprar Tv50 e tomar sorvete")
    }
    else if (trabalho1 != trabalho2){
        console.log("Comprar Tv32 e tomar sorvete")
    }
    if (!trabalho1 && !trabalho2){
        console.log("Manter Saudável")
    }
}

compras(true, true)
compras(true, false)
compras(false, true)
compras(false, false)
