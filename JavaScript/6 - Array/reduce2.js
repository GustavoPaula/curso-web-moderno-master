const alunos = [
  { nome: "João", nota: 7.3, bolsista: true },
  { nome: "Thiago", nota: 9.2, bolsista: false },
  { nome: "Ana", nota: 9.8, bolsista: true },
  { nome: "Maria", nota: 8.7, bolsista: false },
];

// Todos os alunos são bolsista ?
const todosBolsista = (acumulador, atual) => acumulador && atual
console.log(alunos.map(e => e.bolsista).reduce(todosBolsista))


// Algum aluno é bolsista ?
const algumBolsista = (acumulador, atual) => acumulador || atual
console.log(alunos.map(e => e.bolsista).reduce(algumBolsista))