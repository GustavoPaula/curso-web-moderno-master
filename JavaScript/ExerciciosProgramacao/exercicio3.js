const calcularSalario = (qtdeHorasTrabalhadas, valorSalarioHora) => {
  return `Salário igual a R$ ${qtdeHorasTrabalhadas * valorSalarioHora}`;
};

console.log(calcularSalario(150, 40.5));
