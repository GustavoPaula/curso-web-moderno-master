const quantidadeSimboloMais = (numero) => {
  let simboloMais = "+";
  for (let i = 1; i < numero; i++) {
    simboloMais += "+";
  }
  return simboloMais;
};

console.log(quantidadeSimboloMais(4));
