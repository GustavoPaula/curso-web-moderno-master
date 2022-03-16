const valores = [7.7, 8.2, 9, 6.9]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores[4])

console.log(valores.length) 

valores.push({id: 3}, "Gustavo", 30, true)
console.log(valores)
valores.pop()
console.log(valores)

delete valores[3]
console.log(valores)

console.log(typeof valores)