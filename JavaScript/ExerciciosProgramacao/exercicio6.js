const inverso = (valor) => {
  if (typeof valor === "boolean") {
    return !valor;
  } else if (Number.isInteger(valor)) {
    return -valor;
  } else {
    return `Booleanos ou números esperados, mas o parâmetro é do tipo String`;
  }
};

console.log(inverso(true));
console.log(inverso("6"));
console.log(inverso(-2000));
console.log(inverso("programação"));
