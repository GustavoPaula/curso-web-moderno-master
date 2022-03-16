const arrayDeObjeto = (objeto) => {
  let arrayDeArrays = [];

  for (let i in objeto) {
    arrayDeArrays.push([i, objeto[i]]);
  }
  return arrayDeArrays;
};

console.log(arrayDeObjeto({ a: 1, b: 2, c: 3 }));
