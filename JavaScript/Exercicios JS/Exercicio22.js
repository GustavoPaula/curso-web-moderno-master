function anuidadeAssociacao(mes, valor) {
  if (mes >= 1 && mes <= 12) {
    atraso = mes - 1;
    valorAnuidade = valor * (1 + 0.05) ** atraso;
    console.log(`O valor da anuidado ${valorAnuidade.toFixed(2)}`);
  } else {
    console.log(`Mês inválido`);
  }
}
anuidadeAssociacao(1, 100);