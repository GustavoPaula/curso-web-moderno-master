const verificarAnoBisexto = (ano) => {
  let anoBisexto = ano % 4 === 0 && ano % 100 !== 0 ? true : false;
  if (anoBisexto) {
    return anoBisexto;
  } else {
    return `false, pois é multiplo de 100 e não é multiplo de 400`;
  }
};

console.log(verificarAnoBisexto(2020));
console.log(verificarAnoBisexto(2100));
