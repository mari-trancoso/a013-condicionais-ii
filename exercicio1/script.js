const num = Number(prompt("Digite um número e descubra se ele é divisível por 2 ou por 3."))

//1. ifs aninhados

if (num % 2 === 0) {
    console.log(`O número ${num} é divisível por 2.`)
    if (num % 3 === 0) {
        console.log(`O número ${num} é divisível por 3.`)
    }
} else if( num % 3 === 0){
    console.log(`O número ${num} é divisível por 3.`)
    //entra em múltiplos de 3 que não são pares
} else {
   console.log(`O número ${num} não é divisível de 2 ou de 3.`)
    // entra em números que não são múltiplos de 2 ou 3
}


//2. operador lógico
if ((num%2 === 0) || (num%3 === 0)){
    console.log(`O número ${num} é divisível por 2 ou por 3.`)
}