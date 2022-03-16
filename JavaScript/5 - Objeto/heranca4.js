function MeuObject() {}

const obj1 = new MeuObject();
const obj2 = new MeuObject();

//console.log(obj1.__proto__ === obj2.__proto__);
//console.log(MeuObject.prototype === obj1.__proto__);

MeuObject.prototype.nome = "Anônimo";
MeuObject.prototype.falar = function () {
  console.log(`Bom dia! meu nome é: ${this.nome}`);
};

//obj1.falar();
obj2.nome = "Gustavo";
//obj2.falar();

const obj3 = {};
obj3.nome = "Karen";
obj3.__proto__ = MeuObject.prototype;

obj3.falar();
