const calcularMedia = (array) => {
  let media = array.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
    }) / array.length;
  return media;
};

console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));
