Array.prototype.map2 = function (callback) {
  let novoArray = [];
  for (let i = 0; i < this.length; i++) {
    novoArray.push(callback(this[i], i, this));
  }
  return novoArray;
};

const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapís", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
];

let retornaPreco = carrinho.map2((item) => JSON.parse(item).preco);
console.log(retornaPreco);
