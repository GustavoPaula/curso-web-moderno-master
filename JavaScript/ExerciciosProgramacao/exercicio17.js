const somarNumerosArray = (array) => {
  let somarNumeros = array.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  });
  return somarNumeros;
};

console.log(somarNumerosArray([10, 10, 10]));
console.log(somarNumerosArray([15, 15, 15, 15]));
