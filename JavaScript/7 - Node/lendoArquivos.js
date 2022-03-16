const fs = require("fs");
const caminho = __dirname + "/arquivo.json";

//sincrono...
const conteudo = fs.readFileSync(caminho, 'UTF-8');
console.log(conteudo);

//assincrono...
fs.readFile(caminho, 'UTF-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(config.db)
})

const arquivo = require('./arquivo.json')
console.log(arquivo)

fs.readdir(__dirname, (err, arquivo) => {
    console.log("Conteúdo da pasta");
    console.log(arquivo)
})