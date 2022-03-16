let animes = [
  { nome: "Attack On Titan", nota: 7 },
  { nome: "Hunter x Hunter", nota: 9 },
  { nome: "Naruto", nota: 1 },
  { nome: "Clannad", nota: 8 },
  { nome: "Bleach", nota: 3 },
  { nome: "Yu Yu Hakusho", nota: 6 },
  { nome: "Yu-Gi-Oh!", nota: 2 },
  { nome: "One Piece", nota: 10 },
  { nome: "Dragon Ball Z", nota: 4 },
  { nome: "Jujutsu Kaizen", nota: 5 },
];

function imprimirLista(valor) {
  if (valor == "asc") {
    animes.sort(function (a, b) {
      return a.nota - b.nota;
    });
    for (let i in animes) {
      console.log(`${animes[i].nome} - Nota ${animes[i].nota}`);
    }
  } else if (valor == "desc") {
    animes.sort(function (a, b) {
      return a.nota - b.nota;
    });
    animes.reverse();
    for (let i in animes) {
      console.log(`${animes[i].nome} - Nota ${animes[i].nota}`);
    }
  }
}

//imprimirLista("asc")
imprimirLista("desc");
