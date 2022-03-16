const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

axios.get(url).then((response) => {
  const funcionarios = response.data;
  const chinesaComMenorSalario = funcionarios.filter((e) => {
      return e.genero === "F" && e.pais === "China" ? true : false;
    }).reduce((funcionario, funcionarioAtual) => {
      return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
    });

  console.log(chinesaComMenorSalario);
});
