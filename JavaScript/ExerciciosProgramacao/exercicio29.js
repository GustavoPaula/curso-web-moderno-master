const filtrarQuantidadeDigitos = (array, numero) => {
  const novoArray = array.filter((e) => {
    return e.toString().length == numero ? true : false;
  });
  return novoArray;
};

console.log(filtrarQuantidadeDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtrarQuantidadeDigitos([5, 9, 1, 125, 11], 1));
