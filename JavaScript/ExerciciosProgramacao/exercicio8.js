const multiplicar = (numero1, numero2) => {
  let numerosNegativos = numero1 < 0 || numero2 < 0 ? true : false;

  if (numerosNegativos) {
    return `Número negativo`;
  } else {
    let resultado = 0;
    for (let i = 0; i < numero2; i++) {
      resultado += numero1;
    }
    return resultado;
  }
};

console.log(multiplicar(5, 5));
