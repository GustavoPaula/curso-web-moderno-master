const moduloA = require("../../../moduloA");
const moduloA2 = require("/home/gustavo/Desenvolvimento Web/Javascript/7 - Node/moduloA.js");

console.log(moduloA.bemVindo);
console.log(moduloA2.ateLogo);

const saudacao = require("teste");
console.log(saudacao.saudacao);

const http = require("http");
http.createServer((req, res) => {
    res.write("Boa noite !!!");
    res.end();
}).listen(8080);
