function numeroEntre(numero, minimo, maximo, inclusivo = false) {
  if (inclusivo) {
    return numero >= minimo || numero <= maximo;
  } else {
    return numero > minimo || numero < maximo;
  }
}

console.log(numeroEntre(10, 100, 50));
console.log(numeroEntre(16, 100, 16));
console.log(numeroEntre(3, 150, 3));
console.log(numeroEntre(3, 150, 3, true));
