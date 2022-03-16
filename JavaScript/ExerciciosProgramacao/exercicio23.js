const contarPalavras = (string) => {
    let contarPalavras = 0;
    for (let i = 0; i < string.length; i ++){
        string[i].indexOf(' ') >= 0 ? contarPalavras ++ : false
    }
    return contarPalavras +1
}

console.log(contarPalavras("Bom dia"))
console.log(contarPalavras("Sou uma frase"))
console.log(contarPalavras("Me divirto aprendendo a programar"))