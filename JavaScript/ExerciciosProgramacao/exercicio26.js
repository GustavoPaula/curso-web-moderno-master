const removerVogais = (string) => {
  return string.replace(/(a|e|i|o|u)/gi, "");
};

console.log(removerVogais("Cod3r"));
console.log(removerVogais("Fundamentos"));
