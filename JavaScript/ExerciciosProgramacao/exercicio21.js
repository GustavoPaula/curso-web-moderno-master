const retornarMenorNumeroArray = (array) => {
  let menorNumero = array.reduce((acumulador, valorAtual) => {
    if (valorAtual < acumulador) {
      acumulador = valorAtual;
    }
      return acumulador;
  });
  return menorNumero;
};

console.log(retornarMenorNumeroArray([10, 5, 35, 65]));
console.log(retornarMenorNumeroArray([5, -15, 50, 3]));
