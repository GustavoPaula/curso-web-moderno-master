const animes = ["One Piece", "HxH", "YuYu Hakusho", "Yu-Gi-Oh!"];

animes.pop(); // remove o último item do array
console.log(animes);

animes.shift(); // remove o primeiro item do array
console.log(animes);

animes.push("Yu-Gi-Oh!"); // adicionar valor no último item do array
console.log(animes);

animes.unshift("One Piece"); // adicionar valor no primeiro item do array
console.log(animes);

animes.splice(2, 0, "DBZ", "Attack On Titan"); // adicionar, remove ou adicionar e remove itens
console.log(animes);

animes.splice(2, 1); // removendo o elemento no indice 2 do array
console.log(animes);

const melhoresAnimes1 = animes.slice(0, 2);
console.log(melhoresAnimes1);

const melhoresAnimes2 = animes.slice(3);
console.log(melhoresAnimes2);
