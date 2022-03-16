function exibirFatorial(numero){
    let fatorial = numero
    for(let i = 1; i < numero; i ++){
        fatorial *= numero - i 
    }
    console.log(fatorial)
}

exibirFatorial(4)