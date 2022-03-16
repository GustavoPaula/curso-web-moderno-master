//console.log(module.exports);
//console.log(module.exports === this);
//console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;
console.log(module.exports);

exports = { b: 20 };
console.log(module.exports);

module.exports = {
  a: 10,
  b: 20,
  c: 30,
};

console.log(module.exports);
