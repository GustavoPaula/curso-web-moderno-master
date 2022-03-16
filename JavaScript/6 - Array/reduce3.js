Array.prototype.reduce2 = function (callback, valorInicial) {
  let acumulador = valorInicial === undefined ? this[0] : valorInicial;
  let index = valorInicial === undefined ? 1 : 0;

  for (let i = index; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], index, this);
  }

  return acumulador;
};

const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Thiago", nota: 9.2, bolsista: true },
  { nome: "Ana", nota: 9.8, bolsista: false },
  { nome: "Maria", nota: 8.7, bolsista: true },
];

// Todos os alunos são bolsista ?
const todosBolsista = (acumulador, atual) => acumulador && atual;
console.log(alunos.map((e) => e.bolsista).reduce2(todosBolsista));

// Algum aluno é bolsista ?
const algumBolsista = (acumulador, atual) => acumulador || atual;
console.log(alunos.map((e) => e.bolsista).reduce2(algumBolsista));
