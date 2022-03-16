const inverterAtributoEValorObjeto = (objeto) => {
  const novoObjeto = Object.entries(objeto).reduce((ac, [chave, valor]) => {
    ac[valor] = chave;
    return ac;
  }, {});
  return novoObjeto;
};

console.log(inverterAtributoEValorObjeto({ a: 1, b: 2, c: 3 }));
