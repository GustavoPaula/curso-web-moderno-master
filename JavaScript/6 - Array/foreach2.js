Array.prototype.forEach2 = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

let nomes = ["Gustavo", "Thiago", "Gabi", "Weslley"];

nomes.forEach2((valor, indice, array) =>
  console.log(`${valor} - ${indice} - ${array}`)
);
