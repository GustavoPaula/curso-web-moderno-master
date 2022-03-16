const alunos = [
  { nome: "João", nota: 7.3, bolsista: false },
  { nome: "Thiago", nota: 9.2, bolsista: true },
  { nome: "Ana", nota: 9.8, bolsista: false },
  { nome: "Maria", nota: 8.7, bolsista: true },
];

let somaNota = alunos.map((e) => e.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual);
    return acumulador + atual;
});
console.log(somaNota);
