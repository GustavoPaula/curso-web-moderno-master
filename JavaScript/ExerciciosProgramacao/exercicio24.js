const contarCaractere = (caracter, string) => {
  let repetirCaracter = 0;
  for (let i = 0; i < string.length; i++) {
    if (caracter == string[i]) {
      repetirCaracter++;
    }
  }
  return repetirCaracter;
};

console.log(contarCaractere("r", "A sorte favorece os audazes"));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));
