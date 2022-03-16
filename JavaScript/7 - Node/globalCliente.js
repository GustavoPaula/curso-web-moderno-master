require('./global');

console.log(MinhaApp.saudacao());
console.log(global.MinhaApp.nome);

MinhaApp.nome = "Eita!";
console.log(MinhaApp.nome);
