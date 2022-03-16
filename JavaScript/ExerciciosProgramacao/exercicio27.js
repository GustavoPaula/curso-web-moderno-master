const inverterAtributoObjecto = (objeto) => {
  let novoObjeto = {}
  for (let i in objeto){
    novoObjeto.i = objeto[i]
  }
  return novoObjeto
} 

console.log(inverterAtributoObjecto({a: 1, b: 2, c: 3}))

