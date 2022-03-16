// Não tem repetição e não é indexada
const times = new Set();
times.add("Corinthians");
times.add("São Paulo").add("Santos").add("Flamengo");
times.add("Corinthians");
console.log(times);

const nomes = ["Gustavo", "Karen", "Jessica", "Matheus", "Gustavo"];
const nomesSet = new Set(nomes);
console.log(nomesSet);
