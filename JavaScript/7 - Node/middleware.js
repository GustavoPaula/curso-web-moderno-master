const passo1 = (ctx, next) => {
  ctx.valor1 = "Middleware1";
  next();
};

const passo2 = (ctx, next) => {
  ctx.valor2 = "Middleware2";
  next();
};

const passo3 = (ctx) => {
  ctx.valor3 = "Middleware3";
};

const exec = (ctx, ...middleware) => {
  const execPasso = (indice) => {
    middleware &&
      indice < middleware.length &&
      middleware[indice](ctx, () => execPasso(indice + 1));
  };
  execPasso(0);
};

ctx = {};
exec(ctx, passo2, passo1, passo3);
console.log(ctx);
