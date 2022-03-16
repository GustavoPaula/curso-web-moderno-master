const sequencia = {
  _valor: 1, // convenção
  get getValor() {
    return this._valor++;
  },
  set setValor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  }
};

//console.log(sequencia.getValor, sequencia.getValor)
sequencia.setValor = 1000
console.log(sequencia.getValor, sequencia.getValor)
sequencia.setValor = 900
console.log(sequencia.getValor, sequencia.getValor)