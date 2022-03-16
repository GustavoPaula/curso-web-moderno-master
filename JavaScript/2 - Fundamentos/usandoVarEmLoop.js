for (var i = 0; i < 10; i ++){
    console.log(i)
}
console.log("Valor de i = " + i)

const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {
        return i
    }
    )
}
console.log(funcs [0](),funcs [2]())