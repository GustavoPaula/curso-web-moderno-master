const gerarNumeroAleatorio = (min, max, numerosProibidos) => {
  return new Promise((resolve, reject) => {
    const aleatorio = parseInt(Math.random() * (max - min) + min);
    if (numerosProibidos.includes(aleatorio)) {
      reject("Número repetido");
    } else {
      resolve(aleatorio);
    }
  });
};

async function numerosMegaSena(qtdeNumeros, tentativas) {
  try {
    const numerosSorteados = [];
    for (let _ of Array(qtdeNumeros).fill()) {
      numerosSorteados.push(
        await gerarNumeroAleatorio(1, 15, numerosSorteados)
      );
    }
    return numerosSorteados;
  } catch (e) {
    if (!tentativas) {
      throw `Sorteio Cancelado!!!`;
    } else {
      return numerosMegaSena(qtdeNumeros, tentativas - 1);
    }
  }
}

numerosMegaSena(6, 5).then(console.log).catch(console.log);
