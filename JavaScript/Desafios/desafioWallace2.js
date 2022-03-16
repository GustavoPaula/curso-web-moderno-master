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

let animesOrdenados = [];
let repetirAnimes = animes.length;
let menor = 0;
let maior = 0;
let indice = 0;

function pegaMaior() {
  for (let i = 0; i < animes.length; i++) {
    if (animes[i].nota >= maior) {
      maior = animes[i].nota;
    }
  }
  return maior;
}

function pegaMenor() {
  for (let i = 0; i < animes.length; i++) {
    if (animes[i].nota <= menor) {
      menor = animes[i].nota;
    }
  }
  return menor;
}

function animesCrescente(maiorNota) {
  for (let x = 0; x < repetirAnimes; x++) {
    menor = maiorNota;
    for (let y in animes) {
      if (animes[y].nota <= menor) {
        menor = animes[y].nota;
        indice = y;
      }
    }
    animesOrdenados.push(animes[indice]);
    delete animes[indice];
  }
  return animesOrdenados;
}

function animesDecrescente(menorNota) {
  for (let x = 0; x < repetirAnimes; x++) {
    maior = menorNota;
    for (let y in animes) {
      if (animes[y].nota >= maior) {
        maior = animes[y].nota;
        indice = y;
      }
    }
    animesOrdenados.push(animes[indice]);
    delete animes[indice];
  }
  return animesOrdenados;
}

function retornarResultado(valor) {
  if (valor == "asc") {
    const maiorNota = pegaMaior();
    const retornarCrescente = animesCrescente(maiorNota);
    console.log(retornarCrescente);
  }
  if (valor == "desc") {
    const menorNota = pegaMenor();
    const retornarDecrescente = animesDecrescente(menorNota);
    console.log(retornarDecrescente);
  }
}

//retornarResultado("asc");
retornarResultado("desc");
