//Objeto de forma literal
const obj = {};
//console.log(obj)

//Objeto em JS...
const obj2 = new Object();
//console.log(obj2)

//Funcão Construtura
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 + desc / 100);
  };
}

const p1 = new Produto("PS5", 4300, 5);
const p2 = new Produto("Smartphone", 2000, 3);
//console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função Factory
function criarFuncionario(nome, salario, faltas) {
  return {
    nome,
    salario,
    calcularSalario() {
      return (salario / 30) * (30 - faltas);
    },
  };
}

const funcionario = new criarFuncionario("Gustavo", 5000, 0);
//console.log(funcionario.calcularSalario())

//Object.create...
const filha = Object.create(null);
filha.nome = "Gabriela";
//console.log(filha.nome)

//JSON
const fromJSON = JSON.parse('{"info": "Eu Sou JSON"}');
console.log(fromJSON.info);
