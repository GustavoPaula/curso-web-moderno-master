const biblioteca = [
  { isbn: "516204566-7", nome: "Andalax", preco: 595.76, edicoes: [2] },
  { isbn: "985246267-9", nome: "Regrant", preco: 416.93, edicoes: [3, 4] },
  {
    isbn: "021944297-5",
    nome: "Zaam-Dox",
    preco: 838.36,
    edicoes: [5, 2, 3, 4, 1],
  },
  {
    isbn: "006005815-3",
    nome: "Stronghold",
    preco: 212.3,
    edicoes: [4, 6, 5, 3, 2, 1],
  },
  {
    isbn: "611491513-5",
    nome: "Daltfresh",
    preco: 761.37,
    edicoes: [2, 5, 6, 3],
  },
  { isbn: "585737455-3", nome: "Kanlam", preco: 462.86, edicoes: [2] },
  {
    isbn: "548903520-X",
    nome: "Alphazap",
    preco: 529.03,
    edicoes: [2, 5, 6, 1],
  },
  {
    isbn: "002407929-4",
    nome: "Hatity",
    preco: 272.8,
    edicoes: [4, 2, 3, 5, 6, 1],
  },
  { isbn: "085125914-6", nome: "Sonsing", preco: 438.58, edicoes: [6, 1] },
  {
    isbn: "026577616-3",
    nome: "Mat Lam Tam",
    preco: 562.32,
    edicoes: [2, 5, 3, 1, 4],
  },
  {
    isbn: "723464538-1",
    nome: "Flexidy",
    preco: 929.45,
    edicoes: [3, 1, 2, 6, 5],
  },
  { isbn: "790224599-2", nome: "Subin", preco: 148.03, edicoes: [4, 6, 2] },
  {
    isbn: "591647808-9",
    nome: "Viva",
    preco: 772.39,
    edicoes: [6, 2, 1, 4, 5, 3],
  },
  { isbn: "604896777-2", nome: "Trippledex", preco: 473.2, edicoes: [2, 6, 1] },
  {
    isbn: "137849547-0",
    nome: "Zathin",
    preco: 348.94,
    edicoes: [3, 2, 6, 1, 4],
  },
  { isbn: "934003466-X", nome: "Konklux", preco: 554.94, edicoes: [3] },
  { isbn: "628068143-2", nome: "Alpha", preco: 1192.06, edicoes: [3, 5, 1] },
  { isbn: "760178704-4", nome: "Bamity", preco: 123.49, edicoes: [4] },
  {
    isbn: "849903133-1",
    nome: "Vagram",
    preco: 1031.76,
    edicoes: [3, 5, 2, 1, 4, 6],
  },
  {
    isbn: "891431644-0",
    nome: "Alphazap",
    preco: 712.53,
    edicoes: [4, 5, 2, 1],
  },
  { isbn: "427383519-3", nome: "Kanlam", preco: 966.03, edicoes: [3, 2, 5] },
  { isbn: "923013970-X", nome: "Konklux", preco: 202.61, edicoes: [3] },
  { isbn: "837613306-3", nome: "Wrapsafe", preco: 50.02, edicoes: [1] },
  { isbn: "086656081-5", nome: "Overhold", preco: 402.39, edicoes: [5, 6, 3] },
  {
    isbn: "468236022-1",
    nome: "Home Ing",
    preco: 1119.57,
    edicoes: [4, 6, 1, 2],
  },
  {
    isbn: "055567573-4",
    nome: "Quo Lux",
    preco: 1025.58,
    edicoes: [4, 5, 1, 6],
  },
  {
    isbn: "197315023-9",
    nome: "Matsoft",
    preco: 202.83,
    edicoes: [1, 3, 5, 6, 2, 4],
  },
  { isbn: "425961545-9", nome: "Konklux", preco: 999.56, edicoes: [2, 3, 4] },
  { isbn: "916008836-2", nome: "Stim", preco: 1062.27, edicoes: [3, 6, 4] },
  { isbn: "811761853-2", nome: "Prodder", preco: 71.76, edicoes: [5, 2, 3, 1] },
];

const retornarEdicao3e4 = (livros) => {
  return livros.includes(3) && livros.includes(4);
};

const retornarLivrosEdicao3e4 = (biblioteca) => {
  const resultado = biblioteca.filter((livros) =>
    retornarEdicao3e4(livros.edicoes) ? livros : false
  );
  return resultado;
};

console.log(retornarLivrosEdicao3e4(biblioteca)); 
