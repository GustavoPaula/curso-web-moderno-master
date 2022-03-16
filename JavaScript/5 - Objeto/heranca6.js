function Aula (saudacao, videoID){
  this.saudacao = saudacao
  this.videoID = videoID
};

const aula1 = new Aula("Bem Vindo", 123);
const aula2 = new Aula("Até breve", 456);

console.log(aula1, aula2)

// simulando operador new

function Novo(f, ...params){
  const obj = {}
  obj.__proto__ = f.prototype
  f.apply(obj, params)
  return obj
}

const aula3 = Novo (Aula, "Boa tarde", 789)
const aula4 = Novo (Aula, "Até breve", 012)

console.log(aula3, aula4)