const fs = require("fs");

const produto = {
  nome: "Smartphone",
  preco: 1599.9,
  desconto: 0.15,
};

fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(produto), (err) => {
    console.log(err || "Arquivo Salvo");
  }
);
