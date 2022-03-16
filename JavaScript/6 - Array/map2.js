const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapís", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',
];

const retornarPreco = carrinho.map((item) => JSON.parse(item).preco);
console.log(retornarPreco);
