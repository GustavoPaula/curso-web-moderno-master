const aprovados = ["Gustavo", "Karen", "Wallace", "Thiago"];

aprovados.forEach(function (nome, indice, array) {
  console.log(`${indice + 1}) ${nome}`);
  console.log(array);
});

aprovados.forEach((nome) => {
  console.log(nome);
});

const exibirAprovados = (nome, indice) =>
  console.log(`${indice + 1} - ${nome}`);
aprovados.forEach(exibirAprovados);
