const repetir = (numero, qtdeRepeticao) => {
  let resultado = [];
  for (let i = 0; i < qtdeRepeticao; i++) {
    resultado.push(numero);
  }
  return resultado;
};

console.log(repetir(7, 3));
