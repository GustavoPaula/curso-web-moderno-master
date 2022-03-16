const escola = [
  {
    nome: "Turma A",
    alunos: [
      {
        nome: "Gustavo",
        nota: 8.1,
      },
      {
        nome: "Ana",
        nota: 8.2,
      },
    ],
  },
  {
    nome: "Turma B",
    alunos: [
      {
        nome: "Ester",
        nota: 9.9,
      },
      {
        nome: "Arthur",
        nota: 10,
      },
    ],
  },
];

const pegaNotaDosAlunos = (aluno) => aluno.nota;
const pegaNotaDasTurmas = (turma) => turma.alunos.map(pegaNotaDosAlunos);
const notas = escola.map(pegaNotaDasTurmas).flat();
console.log(notas);

const notas2 = escola.flatMap(pegaNotaDasTurmas);
console.log(notas2);
