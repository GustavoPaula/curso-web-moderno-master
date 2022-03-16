const retornarArrayComNumerosEIndicesPares = (array) => {
  let arrayComValoresEIndecesPares = array.filter((elemento, index) => {
    let elementIndexPares = elemento % 2 === 0 && index % 2 === 0 ? true : false;
    if (elementIndexPares) {
      return elemento;
    }
  });

  return arrayComValoresEIndecesPares;
};

console.log(retornarArrayComNumerosEIndicesPares([1, 2, 3, 4]));
console.log(retornarArrayComNumerosEIndicesPares([10, 77, 22, 43]));
