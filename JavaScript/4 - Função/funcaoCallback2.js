//Sem callback
const notas = [6.7, 8.9, 5.6, 3.2, 9.9]
let notasMenores = []

for (var i in notas){
    if(notas[i] < 7 ){
        notasMenores.push(notas[i])
    }
}
console.log(notasMenores)

//Com Callback
const notasMenores2 = notas.filter(a => a < 7)

console.log(notasMenores2)

const notasMenores3 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasMenores3)