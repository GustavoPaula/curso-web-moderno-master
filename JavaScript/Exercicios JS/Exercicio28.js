let vetor = [0,1,2,3,4,5,6,7,8,9,10]
let impar = 0
let par = 0

for(i in vetor){
    if(vetor[i] % 2 == 0){
        par++
    } else{
        impar++
    } 
}

console.log(`Impares - ${impar}
Par - ${par}`)