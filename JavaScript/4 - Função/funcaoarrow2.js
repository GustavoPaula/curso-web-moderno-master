function compararComThis(param){
    console.log(this === param)
}

compararComThis(global)
let obj = {}
compararComThis = compararComThis.bind(obj)
compararComThis(global)
compararComThis(obj)

let compararComThisArrow = (param) => console.log(this === param)

compararComThisArrow(global)
let obj = {}
compararComThisArrow = compararComThisArrow.bind(obj)
compararComThisArrow(obj)
compararComThisArrow(module.exports)
