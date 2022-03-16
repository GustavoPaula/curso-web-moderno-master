const somarTotaisDespesas = (arrayDespesa) => {
  let somaTotalPreco = arrayDespesa.reduce((acumulador, valorInicial) => {
    return acumulador.preco + valorInicial.preco;
  });
  return somaTotalPreco
};

console.log(somarTotaisDespesas([{nome: "Jornal online", categoria: "Informação", preco: 89.99},
{nome: "Cinema", categoria: "Entretenimento", preco: 150}]))

console.log(somarTotaisDespesas([{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}]))