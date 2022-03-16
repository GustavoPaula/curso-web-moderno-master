let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map((e) => e * 2);
console.log(numeros, resultado);

const soma10 = (e) => e + 10;
const triplo = (e) => e * 3;
const paraDinheiro = (e) => `R$: ${parseFloat(e).toFixed(2).replace(".", ",")}`;

resultado = numeros.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
