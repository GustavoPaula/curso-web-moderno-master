for (let letra of "Cod3r") {
  console.log(letra);
}

for (let l in "Cod3r") {
  console.log(l);
}

const assuntos = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

for (let assunto of assuntos.values()) {
  console.log(assunto);
}
