function verificaDivisivelPor3(numero) {
  if (isNaN(numero)) {
    console.log("Não é número");
  } else {
    console.log(numero % 3 == 0);
  }
}

verificaDivisivelPor3(9);
verificaDivisivelPor3(2);
verificaDivisivelPor3("oi");
