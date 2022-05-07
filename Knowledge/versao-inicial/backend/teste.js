const str = "{(([])})()[]";

const Arrstr = str.split('');

const Arrstr2 = [];

const newArray = [];

Arrstr.forEach(element => {

    Arrstr2.push(element);

});

Arrstr.forEach((e, i) => {

    Arrstr2.forEach((e2, i2) => {

        if(e == '(' && e2 == ')'){
            newArray.push(e, e2)
            Arrstr.splice(i, 1)
            Arrstr2.splice(i2, 1)
        } 
        
        else if(e == '[' && e2 == ']'){
            newArray.push(e, e2)
            Arrstr.splice(i, 1)
            Arrstr2.splice(i2, 1)
        }

        else if(e == '{' && e2 == '}'){
            newArray.push(e, e2)
            Arrstr.splice(i, 1)
            Arrstr2.splice(i2, 1)
        }
    })
})

const resultado = newArray.join('')
console.log(resultado)

resultado.length === str.length ? console.log(`É válido`) : console.log(`inválido`);

// ({[]}) // (){}[] // {[]}()
// ][})