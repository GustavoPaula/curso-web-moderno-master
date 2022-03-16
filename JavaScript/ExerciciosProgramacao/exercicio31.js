const soma = notasAlunos => notasAlunos.reduce((acumulador, valorAtual) => {
  acumulador + valorAtual
  return acumulador
}, 0)

const media = arrayEstudantes = soma(arrayEstudantes) / arrayEstudantes.length

const retornarMelhorEstudante = (arrayAlunos) => {
  const melhorAluno = Object.entries(arrayAlunos).map(estudante => {
    return {
      nome: estudante[0],
      media: media(estudante[1])
    }
  })
  return melhorAluno
}

console.log(retornarMelhorEstudante({
      Joao: [8, 7.6, 8.9, 6], // média 7.625
      Mariana: [9, 6.6, 7.9, 8], // média 7.875
      Gustavo: [10, 10, 10, 10], // média 10
      Carla: [5, 9, 7, 10], // média 7.75
      Roberto: [7, 7, 8, 9], // média 7.75
    }
  )
);
