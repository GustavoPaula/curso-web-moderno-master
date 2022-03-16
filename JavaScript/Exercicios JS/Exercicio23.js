function exibirStatusAluno(codigo, nota1, nota2, nota3){
    let media = calcularMedia(nota1, nota2, nota3)
    while(codigo != 0){
        console.log(`Codigo do Aluno: ${codigo}
        Nota1: ${nota1}
        Nota2: ${nota2}
        Nota3: ${nota3}
        Media Ponderada: ${media}
        `)
        codigo = codigo - 1
    }
}

function calcularMedia(nota1, nota2, nota3){
    if(nota1 > nota2 && nota1 > nota3){
        let media = (nota1 * 4 + nota2 * 3 + nota3 * 3)/10
        return media
    } else if (nota2 > nota1 && nota2 > nota3){
        let media = (nota2 * 4 + nota1 * 3 + nota3 * 3)/10
        return media
    } else{
        let media = (nota3 * 4 + nota1 * 3 + nota2 * 3)/10
        return media
    }
}

exibirStatusAluno(5, 10, 9, 8)