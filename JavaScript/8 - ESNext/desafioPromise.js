const fs = require("fs");
const caminho = __dirname + "/dados.txt";

const lerArquivo = () => {
  return new Promise((resolve) => {
    fs.readFile(caminho, "UTF-8", (_, conteudo) => {
      resolve(conteudo);
    });
  });
};

lerArquivo().then(console.log);
