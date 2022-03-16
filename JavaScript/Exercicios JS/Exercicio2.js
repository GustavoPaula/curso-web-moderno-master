const mostrarTriangulo = (lado1, lado2, lado3) => {
    if(lado1 === lado2 && lado1 === lado3){
        console.log("O triângulo é Equilátero")
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        console.log("O triângulo é Isósceles")
    } else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
        console.log("O triângulo é Escaleno")
    }
}

mostrarTriangulo(2,2,2)
mostrarTriangulo(5,3,5)
mostrarTriangulo(1,2,3)