const buscarPalavraSemelhante = (string, array) => {
  let novoArray = array.filter((elemento) => {
    return elemento.indexOf(string) !== -1 ? true : false;
  });
  return novoArray;
};

console.log(buscarPalavraSemelhante("maç", ["programação", "mobile", "profissional"]));
console.log(buscarPalavraSemelhante("python", ["javascript", "java", "c++"]));
