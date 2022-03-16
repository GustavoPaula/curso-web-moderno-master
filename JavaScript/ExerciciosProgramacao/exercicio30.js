const retornaSegundoMaior = (array) => {
  array.sort((a, b) => a - b);
  const segundoMaior = array[array.length - 2];
  return segundoMaior;
};

console.log(retornaSegundoMaior([12, 16, 1, 5]));
console.log(retornaSegundoMaior([8, 4, 5, 6]));
