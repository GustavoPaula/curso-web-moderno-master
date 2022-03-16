const numeroAleatorio = (min, max, tempo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const aleatorio = Math.random() * (max - min) + min;
      resolve(Math.floor(aleatorio));
    }, tempo * 1000);
  });
};

const gerarVariosNumeros = () => {
  return Promise.all([
    numeroAleatorio(1, 50, 3),
    numeroAleatorio(1, 20, 5),
    numeroAleatorio(1, 30, 2),
  ]);
};

gerarVariosNumeros().then(console.log);
